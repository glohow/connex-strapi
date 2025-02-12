import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	/* config options here */
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "connex.glohow.com",
			},
		],
		localPatterns: [
			{
				pathname: "src/assets/images/**",
				search: "",
			},
		],
	},
	output: "standalone",
}

export default withNextIntl(nextConfig)
