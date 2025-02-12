import type { NextConfig } from "next"
import createNextIntlPlugin from "next-intl/plugin"

const isProd = process.env.NEXT_PUBLIC_NODE_ENV === "production"
const basePath = isProd ? "/connex" : ""

const withNextIntl = createNextIntlPlugin()

const nextConfig: NextConfig = {
	/* config options here */
	basePath,
	assetPrefix: isProd ? `${process.env.NEXT_PUBLIC_SITE_URL}` : "",
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "glohow-vn-web-dev.glohow.com",
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
