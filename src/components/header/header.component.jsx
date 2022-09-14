import {Fragment, useEffect, useState} from "react";
import './header.style.scss'
import TodoPage from "../todo-page/todo-page.component";
import {todoRef} from "../../utils/firebase.utils";
import {addDoc, Timestamp, getDocs, orderBy, query} from "firebase/firestore";

import {Button, TextField, FormControl} from "@mui/material";


export const Header = () => {

    const [formField, setFormField] = useState('')
    const [todos, setTodos] = useState([])
    const [loader, setLoader] = useState(true)

    const querySnapshot = query(todoRef, orderBy('Timestamp'))

    const getTodo = async () => {
        const todoSnapshot = await getDocs(querySnapshot)
        const items = []
        todoSnapshot.forEach((doc) => {
            items.push({id: doc.id, todo: doc.data()})
        })
        setTodos(items)
        setLoader(false)
    }

    useEffect(() => {
        getTodo()
    })

    const addTodo = (e) => {
        e.preventDefault()
        addDoc(todoRef, {
            ToDo: formField,
            Timestamp: Timestamp.now(),
        })
        setFormField('')
    }


    return (
        <Fragment>
            <div className="main">
                <div className="container">
                    <div className="header">
                        <h1 className="header-text">Hello. It's a Todo APP.</h1>
                    </div>
                    <div className="form-field">
                        <FormControl>
                            <TextField
                                id="standard-basic"
                                label="Type your ToDo here!"
                                variant="standard"
                                value={formField}
                                onChange={event => setFormField(event.target.value)}/>
                        </FormControl>
                        <div className="form-field__btn">
                            <Button className="form-field__btn-button" type="submit" variant="contained" disabled={!formField} onClick={addTodo}>
                                Add ToDo
                            </Button>
                        </div>

                    </div>
                    <div className="todo">
                        <TodoPage
                            todo={todos}
                        />
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default Header