import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
	return {
		rules: {
			userAgent: '*',
			allow: '/',
		},
		sitemap: `https://next-blank.vercel.app/sitemap.xml`,
	}
}

export default robots
