import React, { useState } from 'react';
import { Paper } from '@mui/material';
import { TextField } from '@mui/material';
import useInputState from './hooks/useInputState';

function TodoForm({addTodo}) {
    const [value, handleChange, reset] = useInputState('');
    return(
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={e => {
                e.preventDefault();
                addTodo(value);
                reset();
            }}>
            <TextField margin='normal'
             label='Add New ToDo' 
             fullWidth variant='standard' 
             value={value} 
             onChange={handleChange} 
             
             />
            </form>
        </Paper>
    )
}

export default TodoForm;