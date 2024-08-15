export interface FormValues {
	text: string
}
export interface EditValues {
	editedText: string
}

export interface ITodo {
    text: string
    id: number
    isCopmleted: boolean,
	isModify: boolean
}

export interface TodoProps {
    removeTodo: Function | any
    todo: ITodo;
    toggleTodo: Function | any
	editTodo: (id: number, text: string) => void
}