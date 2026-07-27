'use client'

import { useEffect } from 'react'

import type { ReactNode } from 'react'

type GlobalErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

export default function GlobalErrorPage({ error, reset }: GlobalErrorPageProps): ReactNode {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="page column justify-center align-center">
			<h2>Sorry, something went wrong on our end 🥹</h2>
			<pre>{error.message || 'An unexpected error occurred.'}</pre>
			<button
				onClick={reset}
				type="button">
				Try again
			</button>
		</div>
	)
}
