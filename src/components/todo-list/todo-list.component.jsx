import {collection, deleteDoc, doc} from 'firebase/firestore'
import {db, todoRef} from "../../utils/firebase.utils";
import './todo-list.style.scss'


import {DeleteOutline} from "@mui/icons-material";
import {List, ListItem, ListItemAvatar, ListItemText} from "@mui/material";

const TodoList = (todos, getToDo) => {

    return (
        <div className="todo-container">
            {
                todos.item.map((item, id) => (
                    <List className="todo-list" key={id}>
                        <ListItem>
                            <ListItemText primary={item.todo.ToDo} secondary="Deadline"/>
                        </ListItem>
                        <DeleteOutline className="todo-delete" fontSize="large" onClick={async () => await deleteDoc(doc(db, 'todos', item.id))}/>
                    </List>
                ))
            }
        </div>
    )
}

export default TodoList