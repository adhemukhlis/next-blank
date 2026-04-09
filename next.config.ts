import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
	compiler: {
		removeConsole: {
			exclude: ['error', 'warn', 'info', 'table']
		},
		reactRemoveProperties: { properties: ['^data-testid$'] }
	},
	cacheComponents: true,
	pageExtensions: ['ts', 'tsx'],
	poweredByHeader: false,
	typescript: {
		ignoreBuildErrors: true,
		tsconfigPath: 'tsconfig.json'
	},
	reactStrictMode: false, // I prefer to set to false to prevent double rendering.
	productionBrowserSourceMaps: false,
	trailingSlash: false,
	turbopack: {
		resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json']
	},
	typedRoutes: true
}

export default nextConfig
