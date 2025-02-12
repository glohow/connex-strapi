import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from '@tanstack/react-query';
import { execute } from '../graphql/execute';


export const GlobalDocument = `
    query Global($status: PublicationStatus) {
  global(status: $status) {
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
    query Hero($status: PublicationStatus) {
  hero(status: $status) {
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
    query KeySolution($status: PublicationStatus) {
  keySolution(status: $status) {
    documentId
    createdAt
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
    query Service($status: PublicationStatus) {
  service(status: $status) {
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
    query Project($status: PublicationStatus, $pagination: PaginationArg) {
  project(status: $status) {
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

export const PageLanguageDocument = `
    query PageLanguage($filters: PageLanguageFiltersInput) {
  pageLanguages(filters: $filters) {
    documentId
    langCode
    langContent
    createdAt
  }
}
    `;

export const usePageLanguageQuery = <
      TData = PageLanguageQuery,
      TError = unknown
    >(
      variables?: PageLanguageQueryVariables,
      options?: UseQueryOptions<PageLanguageQuery, TError, TData>
    ) => {
    
    return useQuery<PageLanguageQuery, TError, TData>(
      variables === undefined ? ['PageLanguage'] : ['PageLanguage', variables],
      execute<PageLanguageQuery, PageLanguageQueryVariables>(PageLanguageDocument, variables),
      options
    )};

export const I18NLocalesDocument = `
    query I18NLocales {
  i18NLocales {
    documentId
    name
    code
  }
}
    `;

export const useI18NLocalesQuery = <
      TData = I18NLocalesQuery,
      TError = unknown
    >(
      variables?: I18NLocalesQueryVariables,
      options?: UseQueryOptions<I18NLocalesQuery, TError, TData>
    ) => {
    
    return useQuery<I18NLocalesQuery, TError, TData>(
      variables === undefined ? ['I18NLocales'] : ['I18NLocales', variables],
      execute<I18NLocalesQuery, I18NLocalesQueryVariables>(I18NLocalesDocument, variables),
      options
    )};
