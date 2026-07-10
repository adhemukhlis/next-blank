'use client'

import type { FC } from 'react'
import { useEffect } from 'react'

type ErrorPageProps = { error: Error & { digest?: string }; reset: () => void }

const ErrorPage: FC<ErrorPageProps> = ({ error, reset }) => {
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

export default ErrorPage
