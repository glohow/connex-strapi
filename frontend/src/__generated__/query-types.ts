import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { execute } from '../graphql/execute';


export const GlobalDocument = `
    query Global($locale: I18NLocaleCode, $status: PublicationStatus) {
  global(locale: $locale, status: $status) {
    defaultSeo {
      id
      metaTitle
      metaDescription
    }
    favicon {
      url
      name
    }
  }
}
    `;

export const useGlobalQuery = <
      TData = GlobalQuery,
      TError = unknown
    >(
      variables?: GlobalQueryVariables,
      options?: UseQueryOptions<GlobalQuery, TError, TData>
    ) => {
    
    return useQuery<GlobalQuery, TError, TData>(
      variables === undefined ? ['Global'] : ['Global', variables],
      execute<GlobalQuery, GlobalQueryVariables>(GlobalDocument, variables),
      options
    )};

export const LogoDocument = `
    query Logo {
  global {
    logo {
      createdAt
      documentId
      name
      url
    }
  }
}
    `;

export const useLogoQuery = <
      TData = LogoQuery,
      TError = unknown
    >(
      variables?: LogoQueryVariables,
      options?: UseQueryOptions<LogoQuery, TError, TData>
    ) => {
    
    return useQuery<LogoQuery, TError, TData>(
      variables === undefined ? ['Logo'] : ['Logo', variables],
      execute<LogoQuery, LogoQueryVariables>(LogoDocument, variables),
      options
    )};

export const HeroDocument = `
    query Hero($locale: I18NLocaleCode, $status: PublicationStatus) {
  hero(locale: $locale, status: $status) {
    documentId
    description
    title
    heroImage {
      url
      documentId
    }
    ourNumber {
      body
      number
      title
    }
    locale
    logo {
      url
      name
      caption
    }
  }
}
    `;

export const useHeroQuery = <
      TData = HeroQuery,
      TError = unknown
    >(
      variables?: HeroQueryVariables,
      options?: UseQueryOptions<HeroQuery, TError, TData>
    ) => {
    
    return useQuery<HeroQuery, TError, TData>(
      variables === undefined ? ['Hero'] : ['Hero', variables],
      execute<HeroQuery, HeroQueryVariables>(HeroDocument, variables),
      options
    )};

export const KeySolutionDocument = `
    query KeySolution($locale: I18NLocaleCode, $status: PublicationStatus) {
  keySolution(locale: $locale, status: $status) {
    documentId
    createdAt
    locale
    solutionCard {
      id
      title
      content
      slug
      image {
        url
        documentId
        name
      }
      movingImage {
        documentId
        name
        url
      }
    }
  }
}
    `;

export const useKeySolutionQuery = <
      TData = KeySolutionQuery,
      TError = unknown
    >(
      variables?: KeySolutionQueryVariables,
      options?: UseQueryOptions<KeySolutionQuery, TError, TData>
    ) => {
    
    return useQuery<KeySolutionQuery, TError, TData>(
      variables === undefined ? ['KeySolution'] : ['KeySolution', variables],
      execute<KeySolutionQuery, KeySolutionQueryVariables>(KeySolutionDocument, variables),
      options
    )};

export const ServiceDocument = `
    query Service($locale: I18NLocaleCode, $status: PublicationStatus) {
  service(locale: $locale, status: $status) {
    title
    body
    services {
      id
      title
      image {
        documentId
        name
        url
      }
      serviceContent {
        id
        header
        content
      }
    }
  }
}
    `;

export const useServiceQuery = <
      TData = ServiceQuery,
      TError = unknown
    >(
      variables?: ServiceQueryVariables,
      options?: UseQueryOptions<ServiceQuery, TError, TData>
    ) => {
    
    return useQuery<ServiceQuery, TError, TData>(
      variables === undefined ? ['Service'] : ['Service', variables],
      execute<ServiceQuery, ServiceQueryVariables>(ServiceDocument, variables),
      options
    )};

export const ProjectDocument = `
    query Project($locale: I18NLocaleCode, $status: PublicationStatus, $pagination: PaginationArg) {
  project(locale: $locale, status: $status) {
    title
    projectCarousel(pagination: $pagination) {
      name
      url
      createdAt
    }
    hightlightList {
      id
      projectName
      image {
        documentId
        name
        url
      }
      category
    }
  }
}
    `;

export const useProjectQuery = <
      TData = ProjectQuery,
      TError = unknown
    >(
      variables?: ProjectQueryVariables,
      options?: UseQueryOptions<ProjectQuery, TError, TData>
    ) => {
    
    return useQuery<ProjectQuery, TError, TData>(
      variables === undefined ? ['Project'] : ['Project', variables],
      execute<ProjectQuery, ProjectQueryVariables>(ProjectDocument, variables),
      options
    )};

export const CreateContactDocument = `
    mutation CreateContact($data: ContactInput!) {
  createContact(data: $data) {
    company
    createdAt
    email
    message
    name
    service
    documentId
  }
}
    `;

export const useCreateContactMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateContactMutation, TError, CreateContactMutationVariables, TContext>) => {
    
    return useMutation<CreateContactMutation, TError, CreateContactMutationVariables, TContext>(
      ['CreateContact'],
      (variables?: CreateContactMutationVariables) => execute<CreateContactMutation, CreateContactMutationVariables>(CreateContactDocument, variables)(),
      options
    )};
