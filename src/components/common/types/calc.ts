export type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
export type Operator = '+' | '-' | '×' | '÷'

export interface PadProps {
	onDigitButtonClick: (digit: Digit) => void
	onPointButtonClick: () => void
	onOperatorButtonClick: (operator: Operator) => void
	onChangeSignButtonClick: () => void
	onEqualButtonClick: () => void
	onAllClearButtonClick: () => void
	onClearEntryButtonClick: () => void
	onMemoryRecallButtonClick: () => void
	onMemoryClearButtonClick: () => void
	onMemoryPlusButtonClick: () => void
	onMemoryMinusButtonClick: () => void
}
  
export interface ButtonProps {
	color?: 'red' | 'green' | 'dark'
	isLarge?: boolean
	onClick?: () => void
	children: any
}

export interface DisplayProps {
	hasMemory: boolean
	expression: string
	value: string
}