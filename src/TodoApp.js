import React from 'react';
import useTodoState from './hooks/useTodoState';
import { Paper } from '@mui/material';
import Typography from '@mui/material/Typography'
import { AppBar } from '@mui/material';
import { Toolbar } from '@mui/material';
import { Grid } from '@mui/material';
import TodoList from './TodoList';
import TodoForm from './TodoForm';


function TodoApp() {

    const initialTodos= [{id:1, task: 'Trim Beard', completed: true}]
    const {todos,addTodo,deleteTodo,editTodo,toggleTodo} =useTodoState(initialTodos)
    

    return (
        <Paper style={{padding: 0, margin: 0,
        height: '100vh', backgroundColor: '#fafafa'}} elevation={0} >
          <AppBar color='primary' position='static' style={{ height: "64px" }}>
             <Toolbar>
             <Typography color='inherit'>TODOS WITH HOOKS</Typography>
             </Toolbar>
          </AppBar>
          
          <Grid container justifyContent='center' style={{marginTop: '1rem'}}>
              <Grid item xs={11} md={8} lg={4}>
                  <TodoForm addTodo={addTodo} />
                  <TodoList todos={todos} 
                  deleteTodos={deleteTodo}
                  toggleTodo={toggleTodo} 
                  editTodo={editTodo} />
              </Grid>
          </Grid>

        </Paper>
    )
}

export default TodoApp;