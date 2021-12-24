import React from 'react'
import TodoItem from './TodoItem';
import { Paper } from '@mui/material';
import { List } from '@mui/material';
import { Divider } from '@mui/material';


function TodoList({todos, deleteTodos, toggleTodo,editTodo}) {
    if(todos.length)
    return(
        <Paper>
            <List>
           {todos.map((todo,i) => (
               <>
               <TodoItem  
               {...todo}
               key={todo.id}  
               removeTodo={deleteTodos}
               toggleTodo={toggleTodo}
               editTodo={editTodo}
               />
               {i< todos.length -1 && <Divider/> } 
              </> 
           ))}
          </List> 
        </Paper>
    );
    return null;
}

export default TodoList;