import React from 'react'
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';




function EditTodoForm({task,id,editTodo,toggle}) {
    const [value,handleChange,reset]= useInputState(task);
    return (
        <form onSubmit={ (e) => {
            e.preventDefault();
            editTodo(id,value);
            reset();
            toggle();
        }}
        style={{marginLeft: '1rem', width: '50%'}}
        >
           <TextField margin='normal' fullWidth value={value} onChange={handleChange} autoFocus />

        </form>
    )
}

export default EditTodoForm;