'use client'

import { useEffect } from 'react'

import type { ReactNode } from 'react'

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

export default function ErrorPage({ error, reset }: ErrorPageProps): ReactNode {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="page column justify-center align-center">
			<h2>Something went wrong!</h2>
			<pre>{error.message || 'An unexpected error occurred.'}</pre>
			<button
				onClick={reset}
				type="button">
				Try again
			</button>
		</div>
	)
}
