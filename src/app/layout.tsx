import { Rubik } from 'next/font/google'

import type { Metadata, Viewport } from 'next'
import type { FC, PropsWithChildren } from 'react'

import '@/styles/global.css'

const nextFont = Rubik({
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family',
	adjustFontFallback: false
})

export const metadata: Metadata = {
	title: 'next-blank',
	description: 'Next.js blank'
}

export const viewport: Viewport = {
	themeColor: '#FAFAFA'
}

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${nextFont.variable}`}>{children}</body>
		</html>
	)
}

export default RootLayout
