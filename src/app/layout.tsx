import { Noto_Serif } from 'next/font/google'

import type { PropsWithChildren } from '@/types/common'
import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'

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

export default function Layout({ children }: PropsWithChildren): ReactNode {
	return (
		<html lang="en">
			<body className={`${nextFont.variable}`}>{children}</body>
		</html>
	)
}
