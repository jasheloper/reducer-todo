import React from 'react';

export default function Todo({todo, dispatch}) {
    return(<>
        <li>
            {todo.item}
        </li>
    </>)
}