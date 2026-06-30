import { ImageResponse } from 'next/og'

import type { CSSProperties } from 'react'

export const runtime = 'edge'

export const size = { height: 36, width: 36 }

const iconStyle: CSSProperties = {
	alignItems: 'center',
	background: '#111111',
	color: 'white',
	display: 'flex',
	fontSize: 24,
	height: '100%',
	justifyContent: 'center',
	width: '100%',
}

export const contentType = 'image/png'

const Icon = (): ImageResponse => {
	return new ImageResponse(<div style={iconStyle}>B</div>, { ...size })
}

export default Icon
