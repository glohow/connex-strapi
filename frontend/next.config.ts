import type { NextConfig } from "next"
import createNextIntlPlugin from 'next-intl/plugin';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
	/* config options here */
	basePath,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'glohow-vn-web-dev.glohow.com',
			}
		],
		localPatterns: [
			{
				pathname: "src/assets/images/**",
				search: "",
			},
		],
	},
	output: 'standalone',
}

export default withNextIntl(nextConfig)
