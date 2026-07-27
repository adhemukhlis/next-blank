import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
	return { rules: { allow: '/', userAgent: '*' }, sitemap: `https://next-blank.vercel.app/sitemap.xml` }
}
