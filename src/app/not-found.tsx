import type { ReactNode } from 'react'

export default function NotFoundPage(): ReactNode {
	return (
		<div className="page column justify-center align-center">
			<h2>Not Found</h2>
			<p>Could not find requested URL</p>
		</div>
	)
}
