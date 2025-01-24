import { defaultShouldDehydrateQuery, QueryCache, QueryClient } from '@tanstack/react-query'

const queryCache = new QueryCache()

function makeQueryClient(): QueryClient {
  return new QueryClient({
    queryCache,
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        // With SSR, we usually want to set some default staleTime above 0 to avoid refetching immediately on the client
        staleTime: 60 * 1000, // 1 minute
        retry: 0
      },
      dehydrate: {
        // per default, only successful Queries are included, this includes pending Queries as well
        shouldDehydrateQuery: (query) => defaultShouldDehydrateQuery(query) || query.state.status === 'pending'
      }
    }
  })
}

let browserQueryClient: QueryClient | undefined = undefined

export default function getQueryClient() {
  if (typeof window === 'undefined') {
    // Server: always make a new query client
    return makeQueryClient()
  } else {
    // Browser: make a new query client if we don't already have one. This is very important, so we don't re-make a new client if React suspends during the initial render. This may not be needed if we have a suspense boundary BELOW the creation of the query client
    if (!browserQueryClient) {
      browserQueryClient = makeQueryClient()
    }

    return browserQueryClient
  }
}

export const invalidateItems = async (keys: string[]) => {
  const queryClient = getQueryClient()

  const promiseMapping = keys.map((i) =>
    queryClient.invalidateQueries({
      queryKey: [i]
    })
  )
  await Promise.allSettled(promiseMapping)
}
