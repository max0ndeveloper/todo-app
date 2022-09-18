import './todo-list.style.scss'
import CheckIcon from '@mui/icons-material/Check';
import {List, ListItem, ListItemText} from "@mui/material";



const TodoList = ({todos, handleDelete}) => {
    return (
        <div className="todo-item">
            <List className="todo-list">
                <ListItem>
                    <ListItemText primary={todos.ToDo}/>
                </ListItem>
                <CheckIcon className="todo-delete"
                           onClick={() => handleDelete(todos.id)}/>
            </List>
        </div>

    )
}

export default TodoList