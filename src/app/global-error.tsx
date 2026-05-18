'use client'

import { useEffect } from 'react'

const GlobalErrorPage = ({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) => {
	useEffect(() => {
		console.error(error)
	}, [error])

	return (
		<div className="page column justify-center align-center">
			<h2>Sorry, something went wrong on our end 🥹</h2>
			<pre>{error.message || 'An unexpected error occurred.'}</pre>
			<button
				type="button"
				onClick={() => reset()}>
				Try again
			</button>
		</div>
	)
}

export default GlobalErrorPage
