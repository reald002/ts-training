import { TodoAction } from '../core/actionInterface';
import { ITodoState } from '../core/stateInterface';
import { ADD_TODO, LOAD_TODOS, PUT_TODOS, REMOVE_TODO, TOGGLE_TODO } from './types';

const initialState: ITodoState = {
  data: [],
  loadingData: true
};

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
  switch (action.type) {
    case ADD_TODO: {
      const _id: string = Date.now().toString();
      const { data } = state;
      return {...state, data: [...data, { _id, text: action.text, checked: false }]};
    }
    case REMOVE_TODO: {
      return {...state, data: state.data.filter(({_id}) => _id !== action.id)};
    }
    case TOGGLE_TODO: {
      return {...state, data: state.data.map(({_id, text, checked}) => (
          _id == action.id
            ? {
                _id,
                text,
                checked: !checked
              }
            : {_id, text, checked}
        ))};
    }
    case PUT_TODOS: {
      return {...state, data: [...action.data], loadingData: false};
    }
    case LOAD_TODOS: {
      return {...state, loadingData: true};
    }
    default:
      return state;
  }
};
