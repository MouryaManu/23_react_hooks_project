import useLocalStorageState from "./useLocalStorageState";
import {v4 as uuidv4} from 'uuid'
export default initialTodos => {
    const [todos,setTodos]= useLocalStorageState('todos',initialTodos);
    return {
        todos,
        addTodo: (newTask)=> {
            setTodos([...todos, {id: uuidv4(),task:newTask, completed:false}]);
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