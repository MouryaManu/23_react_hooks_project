import React from 'react';
import useToggleState from './hooks/useToggleState';
import { ListItem } from '@mui/material';
import { ListItemText } from '@mui/material';
import { Checkbox } from '@mui/material';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { ListItemSecondaryAction } from '@mui/material';
import EditTodoForm from './EditTodoForm';

function TodoItem({task, completed,id,removeTodo, toggleTodo,editTodo}) {
    const [isEditing, toggle] = useToggleState(false);
    return(
        
            <ListItem >
                {isEditing ?  (
                   <EditTodoForm editTodo={editTodo} id={id} task={task} toggle={toggle} />
                ): (
                <>
                <Checkbox checked={completed} onClick={()=> toggleTodo(id)} />
               <ListItemText style={{textDecoration: completed? 'line-through': ''}}>{task}</ListItemText>
               <ListItemSecondaryAction>
                   <IconButton aria-label="Delete" onClick={() => removeTodo(id)}>
                       <DeleteIcon />
                   </IconButton>
                   <IconButton arai-label="Edit" onClick={ toggle}>
                       <EditIcon/>
                   </IconButton>
               </ListItemSecondaryAction>
               </>
               )}
            </ListItem>

        
    )
}

export default TodoItem;