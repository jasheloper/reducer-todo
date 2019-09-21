export const initialTodosState = [
  {
    item: 'Project',
    completed: true,
    id: 1
  }, 
  {
    item: 'Take a Break',
    completed: false,
    id: 2
  },
  {
    item: 'Submit Pull Request',
    completed: false,
    id: 3
  }
];

export const todoReducer = (state, action) => {
  switch (action.type) {
    case('ADD_TODO'):
      return [
        ...state,
        {
          item: action.payload,
          completed: false,
          id: Date.now()
        }
      ]
    case('TOGGLE_COMPLETED'):
      return (  
        state.map( (todo) =>{
          if( todo.id === action.payload ) {
            return { ...todo, completed: !todo.completed }
          }
          return todo;
        })
      )
    case('CLEAR_COMPLETED'):
      return (
        state.filter( todo => !todo.completed )
      )
    default: 
      return state;
  }
};