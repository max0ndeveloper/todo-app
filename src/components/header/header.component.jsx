import {Fragment, useEffect, useState} from "react";
import './header.style.scss'
import TodoPage from "../todo-page/todo-page.component";
import {todoRef} from "../../utils/firebase.utils";
import {addDoc, Timestamp, getDocs, orderBy, query} from "firebase/firestore";


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
            <div className="header">
                <h1 className="header-text">Hello. It's Todo APP</h1>
                <form action="">
                    <input type="text" className="todo-input" value={formField} onChange={event => setFormField(event.target.value)}/>
                    <button className="todo-button" type='button' onClick={addTodo}>
                        <i className="">Add Todo</i>
                    </button>
                </form>
            </div>
            <TodoPage
                todo={todos}
            />
        </Fragment>
    )
}

export default Header