export interface IContext {
	isDark: boolean,
	setIsDark: (isDark: boolean) => void
}

export type Children = {
    children: JSX.Element | JSX.Element[]
}