  
import React, { useReducer } from 'react';

import Todo from './ToDo';
import TodoForm from './ToDoForm';
import { todoReducer, initialTodosState } from '../reducers/reducer'

export default function TodoList() {
  const [ state, dispatch ] = useReducer(todoReducer, initialTodosState);

  return (
    <div>
      {
        state.map( (todo) => {
          return <Todo todo={todo} key={todo.id} dispatch={dispatch} />
        })
      }
      <TodoForm dispatch={dispatch} />
    </div>
  );
}