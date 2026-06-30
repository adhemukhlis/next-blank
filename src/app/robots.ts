import type { MetadataRoute } from 'next'

const robots = (): MetadataRoute.Robots => {
	return { rules: { allow: '/', userAgent: '*' }, sitemap: `https://next-blank.vercel.app/sitemap.xml` }
}

export default robots
