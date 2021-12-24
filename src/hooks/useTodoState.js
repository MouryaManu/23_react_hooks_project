import useLocalStorageState from "./useLocalStorageState";
import uuid from 'uuid/v4'
export default initialTodos => {
    const [todos,setTodos]= useLocalStorageState('todos',initialTodos);
    return {
        todos,
        addTodo: (newTask)=> {
            setTodos([...todos, {id: uuid(),task:newTask, completed:false}]);
        },
        deleteTodo: (id) => {
            const updatedTodos= todos.filter(todo => (
                todo.id !== id
            ));
            setTodos(updatedTodos);
        },
        toggleTodo: id => {
            const updatedTodos = todos.map(todo => (
                todo.id === id ? {...todo, completed: !todo.completed} : todo
            ))
            setTodos(updatedTodos);
        },
        editTodo: (id,newTask) => {
            const updatedTodos = todos.map(todo => (
                todo.id === id ? {...todo, task: newTask} : todo
            ))
            setTodos(updatedTodos);
        }
    }
}