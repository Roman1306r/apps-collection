import DeleteIcon from '@mui/icons-material/Delete'
import DoneIcon from '@mui/icons-material/Done'
import EditIcon from '@mui/icons-material/Edit'
import { Alert, Button, Collapse, TextField } from '@mui/material'
import Tooltip from '@mui/material/Tooltip'
import { memo, useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { EditValues, TodoProps } from '../common/types/todolist'
import { checkLength } from '../common/utils/utils'

const Todo = memo(({ removeTodo, toggleTodo, todo, editTodo }: TodoProps) => {

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<EditValues>()
    const [isEdit, setIsEdit] = useState(false)
    
    const onSubmit: SubmitHandler<EditValues> = (data: EditValues) => {
        editTodo(todo.id, data.editedText)
        setValue('editedText', '')
        setIsEdit(false)
    }

    return <div className='todo'>
        <div className={todo.isCopmleted ? 'todo__body completed' : 'todo__body'}>
            <div className="todo__text">
                {checkLength(todo.text, 30)}
            </div>
            <div>
                <Tooltip title="Completed">
                    <DoneIcon className='icon' fontSize='large' onClick={() => toggleTodo(todo.id)} />
                </Tooltip>
                <Tooltip title="Edit todo">
                    <EditIcon className='icon' fontSize='large' onClick={() => setIsEdit(!isEdit)} />
                </Tooltip>
                <Tooltip title="Delete todo">
                    <DeleteIcon className='icon' fontSize='large' onClick={() => removeTodo(todo.id)} />
                </Tooltip>
                {todo.isModify && '(ed.)'}
            </div>
        </div>
        <Collapse in={isEdit}>
            <Collapse in={!!errors.editedText}>
                <Alert variant="filled" severity="error">Enter correct data! Max length - 80 symbols, min - 5</Alert>
            </Collapse>
            <form onSubmit={handleSubmit(onSubmit)} className="todo__form">
                <TextField autoComplete="off" className='todo__form-input' fullWidth {...register("editedText", { required: true, maxLength: 80, minLength: 5 })} color="success" label="Edit" variant="standard" />
                <Button className='todo__form-btn' type='submit' variant="outlined" color='inherit'>Edit</Button>
            </form>
        </Collapse>
    </div>
})
export default Todo