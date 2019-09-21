import React, { useReducer } from "react";
import { reducer, initialState } from '../reducers/reducer'
import Todo from './ToDo'

export default function ToDoList(){
    const [state, dispatch] = useReducer(reducer, initialState);

    return(<>

            {
                state.map(  
                    (todo) => {
                        return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
                    }
                )
            }

    </>)
}

