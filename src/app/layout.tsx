import { Rubik } from 'next/font/google'

import type { PropsExtendChildren } from '@/types/common'
import type { Metadata, Viewport } from 'next'
import type { FC } from 'react'

import '@/styles/global.css'

const nextFont = Rubik({
	style: ['normal', 'italic'],
	weight: ['300', '400', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-family',
	adjustFontFallback: false,
})

export const metadata: Metadata = {
	title: 'next-blank',
	description: 'Next.js Blank',
}

export const viewport: Viewport = {
	themeColor: '#FAFAFA',
	colorScheme: 'light',
	viewportFit: 'contain',
	userScalable: false,
	initialScale: 1,
	maximumScale: 1,
	minimumScale: 1,
}

const RootLayout: FC<PropsExtendChildren> = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${nextFont.variable}`}>{children}</body>
		</html>
	)
}

export default RootLayout
