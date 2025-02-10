/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
    "\n  query Global($locale: I18NLocaleCode, $status: PublicationStatus) {\n    global(locale: $locale, status: $status) {\n      defaultSeo {\n        id\n        metaTitle\n        metaDescription\n      }\n      favicon {\n        url\n        name\n      }\n    }\n  }\n": types.GlobalDocument,
    "\n\tquery Logo {\n\t\tglobal {\n\t\t\tlogo {\n\t\t\t\tcreatedAt\n\t\t\t\tdocumentId\n\t\t\t\tname\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n": types.LogoDocument,
    "\n\tquery Hero($locale: I18NLocaleCode, $status: PublicationStatus) {\n\t\thero(locale: $locale, status: $status) {\n      documentId\n      description\n      title\n      heroImage {\n        url\n        documentId\n      }\n      ourNumber {\n        body\n        number\n        title\n      }\n      locale\n      logo {\n        url\n        name\n        caption\n      }\n    }\n\t}\n": types.HeroDocument,
    "\n  query KeySolution($locale: I18NLocaleCode, $status: PublicationStatus) {\n    keySolution(locale: $locale, status: $status) {\n      documentId\n      createdAt\n      locale\n      solutionCard {\n        id\n        title\n        content\n        slug\n        image {\n          url\n          documentId\n          name\n        }\n        movingImage {\n          documentId\n          name\n          url\n        }\n      }\n    }\n  }\n": types.KeySolutionDocument,
    "\n  query Service($locale: I18NLocaleCode, $status: PublicationStatus) {\n    service(locale: $locale, status: $status) {\n      title\n      body\n      services {\n        id\n        title\n        image {\n          documentId\n          name\n          url\n        }\n        serviceContent {\n          id\n          header\n          content\n        }\n      }\n    }\n  }\n": types.ServiceDocument,
    "\n  query Project($locale: I18NLocaleCode, $status: PublicationStatus, $pagination: PaginationArg) {\n    project(locale: $locale, status: $status) {\n      title\n      projectCarousel(pagination: $pagination) {\n        name\n        url\n        createdAt\n      }\n      hightlightList {\n        id\n        projectName\n        image {\n          documentId\n          name\n          url\n        }\n        category\n      }\n    }\n  }\n": types.ProjectDocument,
    "\n  mutation CreateContact($data: ContactInput!) {\n    createContact(data: $data) {\n      company\n      createdAt\n      email\n      message\n      name\n      service\n      documentId\n    }\n  }\n": types.CreateContactDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Global($locale: I18NLocaleCode, $status: PublicationStatus) {\n    global(locale: $locale, status: $status) {\n      defaultSeo {\n        id\n        metaTitle\n        metaDescription\n      }\n      favicon {\n        url\n        name\n      }\n    }\n  }\n"): typeof import('./graphql').GlobalDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery Logo {\n\t\tglobal {\n\t\t\tlogo {\n\t\t\t\tcreatedAt\n\t\t\t\tdocumentId\n\t\t\t\tname\n\t\t\t\turl\n\t\t\t}\n\t\t}\n\t}\n"): typeof import('./graphql').LogoDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n\tquery Hero($locale: I18NLocaleCode, $status: PublicationStatus) {\n\t\thero(locale: $locale, status: $status) {\n      documentId\n      description\n      title\n      heroImage {\n        url\n        documentId\n      }\n      ourNumber {\n        body\n        number\n        title\n      }\n      locale\n      logo {\n        url\n        name\n        caption\n      }\n    }\n\t}\n"): typeof import('./graphql').HeroDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query KeySolution($locale: I18NLocaleCode, $status: PublicationStatus) {\n    keySolution(locale: $locale, status: $status) {\n      documentId\n      createdAt\n      locale\n      solutionCard {\n        id\n        title\n        content\n        slug\n        image {\n          url\n          documentId\n          name\n        }\n        movingImage {\n          documentId\n          name\n          url\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').KeySolutionDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Service($locale: I18NLocaleCode, $status: PublicationStatus) {\n    service(locale: $locale, status: $status) {\n      title\n      body\n      services {\n        id\n        title\n        image {\n          documentId\n          name\n          url\n        }\n        serviceContent {\n          id\n          header\n          content\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').ServiceDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  query Project($locale: I18NLocaleCode, $status: PublicationStatus, $pagination: PaginationArg) {\n    project(locale: $locale, status: $status) {\n      title\n      projectCarousel(pagination: $pagination) {\n        name\n        url\n        createdAt\n      }\n      hightlightList {\n        id\n        projectName\n        image {\n          documentId\n          name\n          url\n        }\n        category\n      }\n    }\n  }\n"): typeof import('./graphql').ProjectDocument;
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation CreateContact($data: ContactInput!) {\n    createContact(data: $data) {\n      company\n      createdAt\n      email\n      message\n      name\n      service\n      documentId\n    }\n  }\n"): typeof import('./graphql').CreateContactDocument;


export function gql(source: string) {
  return (documents as any)[source] ?? {};
}
