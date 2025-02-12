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
import dynamic from "next/dynamic"

const MainBannerSection = dynamic(() => import("@/_pages/MainBanner"))
const KeySolutionSection = dynamic(() => import("@/_pages/KeySolution"))
const OurServices = dynamic(() => import("@/_pages/OurServices"))
const OurProjects = dynamic(() => import("@/_pages/OurProjects"))
const ContactUs = dynamic(() => import("@/_pages/ContactUs"))

export default async function Home() {
	const queryClient = getQueryClient()

	await Promise.allSettled([
		await queryClient.prefetchQuery(getLogoOptions()),
		await queryClient.prefetchQuery(heroOptions()),
		await queryClient.prefetchQuery(keySolutionOptions()),
		await queryClient.prefetchQuery(servicesOptions()),
		await queryClient.prefetchQuery(projectsOptions({pagination: {limit: 50}})),
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
