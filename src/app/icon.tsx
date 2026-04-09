import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const size = {
	width: 36,
	height: 36
}

export const contentType = 'image/png'

const Icon = () => {
	return new ImageResponse(
		<div
			style={{
				fontSize: 24,
				background: '#111111',
				width: '100%',
				height: '100%',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				color: 'white'
			}}>
			B
		</div>,
		{
			...size
		}
	)
}

export default Icon
