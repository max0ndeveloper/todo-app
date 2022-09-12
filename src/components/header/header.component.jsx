import {Fragment, useEffect, useState} from "react";
import './header.style.scss'
import TodoPage from "../todo-page/todo-page.component";
import {db, todoRef} from "../../utils/firebase.utils";
import {collection, addDoc, Timestamp, getDocs, orderBy, query} from "firebase/firestore";


export const Header = () => {

    const [formField, setFormField] = useState('')
    const [todos, setTodos] = useState([])
    const [loader, setLoader] = useState(true)

    const querySnapshot = query(collection(db, 'todos'), orderBy('Timestamp'))

    const getTodo = async () => {
        const todoSnapshot = await getDocs(querySnapshot)
        const items = []
        todoSnapshot.forEach((doc) => {
            items.push(doc.data())

        })
        setTodos(items)
        setLoader(false)
    }

    useEffect(() => {
        getTodo()
    }, [])

    const addTodo = (e) => {
        getTodo()
        e.preventDefault()
        addDoc(todoRef, {
            ToDo: formField,
            Timestamp: Timestamp.now(),
            ID: (Math.random() * 1000).toFixed(0)
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