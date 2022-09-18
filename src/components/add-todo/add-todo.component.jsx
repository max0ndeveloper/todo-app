import {useState} from "react";
import React from "react";
import './add-todo.style.scss'
import {todoRef} from "../../utils/firebase.utils";
import {addDoc, serverTimestamp} from "firebase/firestore";

import {Button, TextField, FormControl} from "@mui/material";


export const AddTodo = () => {

    const [formField, setFormField] = useState('')

    const addTodo = async (e) => {
        e.preventDefault()
        await addDoc(todoRef, {
            ToDo: formField,
            createdAt: serverTimestamp(),
        })
        setFormField('')
    }


    return (
        <div className="main">
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
                    <Button className="form-field__btn-button"
                            type="submit" variant="contained"
                            disabled={!formField}
                            onClick={addTodo}>
                        Add ToDo
                    </Button>
                </div>

            </div>
        </div>
    )
}

export default AddTodo