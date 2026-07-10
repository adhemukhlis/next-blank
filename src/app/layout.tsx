import type { Metadata, Viewport } from 'next'
import { Noto_Serif } from 'next/font/google'
import type { FC } from 'react'
import type { PropsWithChildren } from '@/types/common'

import '@/styles/global.css'

const nextFont = Noto_Serif({
	adjustFontFallback: false,
	display: 'swap',
	style: ['normal', 'italic'],
	subsets: ['latin'], // add 'math' to add math symbols
	variable: '--font-family',
	weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = { description: 'Next.js Blank', title: 'next-blank' }

export const viewport: Viewport = { colorScheme: 'light', initialScale: 1, maximumScale: 1, minimumScale: 1, themeColor: '#FAFAFA', userScalable: false, viewportFit: 'contain' }

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
	return (
		<html lang="en">
			<body className={`${nextFont.variable}`}>{children}</body>
		</html>
	)
}

export default RootLayout
