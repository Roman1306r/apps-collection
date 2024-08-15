import FilterAltIcon from '@mui/icons-material/FilterAlt'
import PlaylistRemoveIcon from '@mui/icons-material/PlaylistRemove'
import { Alert, Collapse, IconButton } from '@mui/material'
import Button from '@mui/material/Button'
import ButtonGroup from '@mui/material/ButtonGroup'
import TextField from '@mui/material/TextField'
import Tooltip from '@mui/material/Tooltip'
import { useCallback, useState } from "react"
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormValues, ITodo } from '../common/types/todolist'
import Todo from './Todo'
import Snackbar, { SnackbarCloseReason } from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';
import EditOffIcon from '@mui/icons-material/EditOff';

const TodoList = () => {

    const [todos, setTodos] = useState<ITodo[]>([])
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<FormValues>()
    const [open, setOpen] = useState(false);

    const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
        const newTodo: ITodo = {
            text: data.text,
            id: +Math.random().toFixed(4),
            isCopmleted: false,
            isModify: false
        }
        setTodos([...todos, newTodo])
        setValue('text', '')
    }

    const removeTodo = useCallback((id: number) => setTodos(todos.filter((todo: ITodo) => todo.id !== id)), [todos])
    const clearTodos = useCallback(() => setTodos([]), [todos])
    const toggleTodo = useCallback((id: number) => {
        setTodos(todos.map((todo: ITodo) => todo.id === id ? { ...todo, isCopmleted: !todo.isCopmleted } : { ...todo }))
        setOpen(true)
    }, [todos])
    const clearCompletedTodos = useCallback(() => setTodos(todos.filter((todo: ITodo) => !todo.isCopmleted)), [todos])

    const editTodo = useCallback((id: number, text: string) => {
        let todo = todos.filter(todo => todo.id === id)[0]
        const newTodos = todos.filter(todo => todo.id !== id)
        todo = { ...todo, isModify: true, text }
        setTodos([todo, ...newTodos])
    }, [todos])

    const deleteEditedTodo = useCallback(() => setTodos(todos.filter((todo: ITodo) => !todo.isModify)), [todos])

    const handleClose = (event: React.SyntheticEvent | Event, reason?: SnackbarCloseReason) => {
        if (reason === 'clickaway') return;
        setOpen(false);
    };

    const getCompletedTodos = useCallback(() => {
        let amount = todos.filter(todo => todo.isCopmleted).length
        if(amount === 0) return 'todos is not completed'
        return amount > 1 ? `${amount} todos done` : `${amount} todo done`
    }, [todos])
  

    return (<section className='todolist'>
        <h1>TodoList</h1>
        <Collapse in={!!errors.text}>
            <Alert variant="filled" severity="error">Enter correct data! Max length - 80 symbols, min - 5</Alert>
        </Collapse>
        <form onSubmit={handleSubmit(onSubmit)} className="todolist__form">
            <TextField autoComplete="off" className='todolist__form-input' fullWidth {...register("text", { required: true, maxLength: 80, minLength: 5 })} color="success" id="standard-basic" label="New todo" variant="outlined" />
            <Tooltip title="Add todo">
                <Button className='todolist__form-btn' type='submit' variant="outlined" color='inherit'>Add</Button>
            </Tooltip>
        </form>
        {!todos.length
            ? <h2>Empty!</h2> 
            : <div className="todos">
                <div className="todos-info">
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled button group"
                    >
                        <Tooltip title="Delete All">
                            <Button onClick={clearTodos}><PlaylistRemoveIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete completed todos">
                            <Button disabled={!todos.find(item => item.isCopmleted)} onClick={clearCompletedTodos}><FilterAltIcon /></Button>
                        </Tooltip>
                        <Tooltip title="Delete edited todos">
                            <Button disabled={!todos.find(item => item.isModify)} onClick={deleteEditedTodo}><EditOffIcon /></Button>
                        </Tooltip>
                    </ButtonGroup>
                </div>
                {todos.map(todo => <Todo toggleTodo={toggleTodo} editTodo={editTodo} removeTodo={removeTodo} key={todo.id} todo={todo} />)}
            </div>}
            <Snackbar
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                message={getCompletedTodos()}
                action={<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}><CloseIcon fontSize="small" /></IconButton>}
            />
    </section>)
}
export default TodoList