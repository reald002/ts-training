import { TodoAction } from '../core/actionInterface';
import { ITodoState } from '../core/stateInterface';
import {
  ADD_TODO,
  ADD_TODO_WITH_GENERATED_ID,
  END_EDIT_TODO,
  LOAD_TODOS,
  PUT_TODOS,
  REMOVE_TODO,
  START_EDIT_TODO,
  TOGGLE_TODO
} from './types';

const initialState: ITodoState = {
  data: [],
  loadingData: true,
  success: false
};

export const todoReducer = (state = initialState, action: TodoAction): ITodoState => {
  switch (action.type) {
    case ADD_TODO: {
      return {...state};
    }
    case ADD_TODO_WITH_GENERATED_ID: {
      const { data } = state;
      return {...state, data: [...data, { _id: action.id, text: action.text, checked: false, isEditing: false }]};
    }
    case REMOVE_TODO: {
      return {...state, data: state.data.filter(({_id}) => _id !== action.id)};
    }
    case TOGGLE_TODO: {
      return {...state, data: state.data.map(({_id, text, checked, isEditing}) => (
          _id == action.id
            ? {
                _id,
                text,
                checked: !checked,
                isEditing
              }
            : {_id, text, checked, isEditing}
        ))};
    }
    case PUT_TODOS: {
      return {...state, data: [...action.data], loadingData: false};
    }
    case LOAD_TODOS: {
      return {...state, loadingData: true};
    }
    case START_EDIT_TODO: {
      return {...state, data: state.data.map(todo => (
        todo._id === action.id
          ? {...todo, isEditing: true}
          : todo
        ))};
    }
    case END_EDIT_TODO: {
      return {...state, data: state.data.map(todo => (
          todo._id === action.todo._id
            ? {...todo, text: action.todo.text ?? todo.text, isEditing: false}
            : todo
        ))};
    }
    default:
      return state;
  }
};
