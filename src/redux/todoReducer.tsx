import { TodoAction } from '../core/actionInterface';
import { ITodoState } from '../core/stateInterface';
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';

const initialState: ITodoState = {
  data: []
};

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
  switch (action.type) {
    case ADD_TODO: {
      const id: string = Date.now().toString();
      const { data } = state;
      return {...state, data: [...data, { id, text: action.text, checked: false }]};
    }
    case REMOVE_TODO: {
      return {...state, data: state.data.filter(({id}) => id !== action.id)};
    }
    case TOGGLE_TODO: {
      return {...state, data: state.data.map(({id, text, checked}) => (
          id == action.id
            ? {
                id,
                text,
                checked: !checked
              }
            : {id, text, checked}
        ))};
    }
    default:
      return state;
  }
};
