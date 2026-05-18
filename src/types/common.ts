import type { ReactNode } from 'react'

export type PropsExtendChildren<P = object> = P & {
	children?: ReactNode
}
