import type { MetadataRoute } from 'next'

const sitemap = (): MetadataRoute.Sitemap => {
	return [{ changeFrequency: 'yearly', lastModified: new Date(), priority: 1, url: 'https://next-blank.vercel.app' }]
}

export default sitemap
