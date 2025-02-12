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
`)

export const getKeySolutions = gql(`
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
`)

export const getServices = gql(`
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
`)

export const getProjects = gql(`
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