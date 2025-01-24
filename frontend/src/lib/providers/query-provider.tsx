'use client'

import { QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import type { PropsWithChildren } from 'react'
import React from 'react'
import getQueryClient from '@/utils/get-query-client'

const AppQueryProvider = ({ children }: PropsWithChildren) => {
  // NOTE: Avoid useState when initializing the query client if you don't have a suspense boundary between this and the
  // code that may suspend because React will throw away the client on the initial render if it suspends and there is no boundary
  const queryClient = getQueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default AppQueryProvider
