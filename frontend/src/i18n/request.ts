import { getRequestConfig } from "next-intl/server"
import { routing } from "./routing"
import { execute } from "@/graphql/execute"
import {
	PageLanguageQuery,
	PageLanguageQueryVariables,
	PageLanguageDocument,
} from "@/__generated__/graphql"

export default getRequestConfig(async ({ requestLocale }) => {
	// This typically corresponds to the `[locale]` segment
	let locale = await requestLocale

	// Ensure that a valid locale is used
	if (!locale || !routing.locales.includes(locale as any)) {
		locale = routing.defaultLocale
	}

	const pageLang = await execute<PageLanguageQuery, PageLanguageQueryVariables>(
		PageLanguageDocument,
		{
			filters: { langCode: { eq: locale } },
		},
	)()
	// Now, (data) is the json data returned from the api
	// try to console.log it to see if it contains data.data
	const messages = pageLang.pageLanguages[0]?.langContent

	return {
		locale,
		messages,
	}
})
