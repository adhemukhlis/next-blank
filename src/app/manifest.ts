import type { MetadataRoute } from 'next'

const manifest = (): MetadataRoute.Manifest => {
	return {
		background_color: '#FAFAFA',
		categories: ['starter'],
		description: 'Next.js Blank',
		display: 'standalone',
		id: 'next-blank',
		// icons: [
		// 	{
		// 		src: '/_assets/icons/icon-192x192.png',
		// 		sizes: '192x192',
		// 		type: 'image/png',
		// 		purpose: 'maskable',
		// 	},
		// 	{
		// 		src: '/_assets/icons/icon-512x512.png',
		// 		sizes: '512x512',
		// 		type: 'image/png',
		// 	},
		// ],
		// screenshots: [
		// 	{
		// 		src: '/_assets/images/1.png',
		// 		sizes: '1992x1773',
		// 		type: 'image/png',
		// 	},
		// 	{
		// 		src: '/_assets/images/2.png',
		// 		sizes: '1992x1773',
		// 		type: 'image/png',
		// 	},
		// ],
		lang: 'id-ID',
		name: 'Next Blank',
		orientation: 'portrait',
		scope: '/',
		short_name: 'next-blank',
		start_url: '/',
		theme_color: '#FAFAFA',
	}
}

export default manifest
