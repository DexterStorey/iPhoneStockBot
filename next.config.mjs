/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true
	},
	reactStrictMode: true,
	transpilePackages: ['@rubriclab/ui', '@rubriclab/utils']
}

export default nextConfig
