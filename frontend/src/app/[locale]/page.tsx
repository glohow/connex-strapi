import ContactUs from "@/_pages/ContactUs"
import KeySolutionSection from "@/_pages/KeySolution"
import MainBannerSection from "@/_pages/MainBanner"
import OurProjects from "@/_pages/OurProjects"
import OurServices from "@/_pages/OurServices"
import {
	getLogoOptions,
	heroOptions,
	keySolutionOptions,
	projectsOptions,
	servicesOptions,
} from "@/queries"
import Footer from "@/shared/common/Footer"
import Header from "@/shared/common/Header"
import getQueryClient from "@/utils/get-query-client"
import { dehydrate, HydrationBoundary } from "@tanstack/react-query"
import { getLocale } from "next-intl/server"

export default async function Home() {
	const queryClient = getQueryClient()
	const lang = await getLocale()

	await Promise.allSettled([
		await queryClient.prefetchQuery(getLogoOptions()),
		await queryClient.prefetchQuery(heroOptions({ locale: lang })),
		await queryClient.prefetchQuery(keySolutionOptions({ locale: lang })),
		await queryClient.prefetchQuery(servicesOptions({ locale: lang })),
		await queryClient.prefetchQuery(projectsOptions({ locale: lang })),
	])

	return (
		<HydrationBoundary state={dehydrate(queryClient)}>
			<Header />
			<div className='flex-1 bg-base-100'>
				<MainBannerSection />
				<KeySolutionSection />
				<OurServices />
				<OurProjects />
				<ContactUs />
			</div>
			<Footer />
		</HydrationBoundary>
	)
}
