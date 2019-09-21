


export const initialState = 
[
    {
      item: 'Todos Project',
      completed: false,
      id: 1
    }, 
    {
      item: 'Check Email',
      completed: true,
      id: 2
    },
    {
      item: 'Eat',
      completed: false,
      id: 3
    }
  ];



export const reducer = (state, action) => {


        switch(action.type) {
            case 'ADD_TODO':
            return [...state]
            
            default:
            return state;
        }
    }
