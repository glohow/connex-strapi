import { gql } from "@/__generated__"

export const getGlobalSeo = gql(`
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
`)

export const getGlobalLogo = gql(`
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
`)

export const getHero = gql(`
	query Hero($status: PublicationStatus, $locale: I18NLocaleCode) {
    hero(status: $status, locale: $locale) {
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
`)

export const getKeySolutions = gql(`
  query KeySolution($status: PublicationStatus, $locale: I18NLocaleCode) {
    keySolution(status: $status, locale: $locale) {
      title
      body
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
      createdAt
    }
  }
`)

export const getServices = gql(`
  query Service($status: PublicationStatus, $locale: I18NLocaleCode) {
    service(status: $status, locale: $locale) {
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
`)

export const getProjects = gql(`
  query Project($status: PublicationStatus, $locale: I18NLocaleCode, $pagination: PaginationArg) {
    project(status: $status, locale: $locale) {
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
`)

export const createContact = gql(`
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
`)

export const getPageLanguage = gql(`
  query PageLanguage($filters: PageLanguageFiltersInput) {
    pageLanguages(filters: $filters) {
      documentId
      langCode
      langContent
      createdAt
    }
  }
`)

export const getI18nLocale = gql(`
  query I18NLocales {
    i18NLocales {
      documentId
      name
      code
    }
  }
`)