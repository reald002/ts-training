import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO } from './types';
import { addTodoFunc, removeTodoFunc, toggleTodoFunc } from './functions';
import {ITodoAction, ITodoState} from '../core/interfaces';

const initialState: ITodoState = {
  data: []
};

export const todoReducer = (state = initialState, action: ITodoAction): ITodoState => {
  switch (action.type) {
    case ADD_TODO:
      return {
        data: addTodoFunc(state, action.text)
      };
    case REMOVE_TODO:
      return {
        data: removeTodoFunc(state, action.id)
      };
    case TOGGLE_TODO:
      return {
        data: toggleTodoFunc(state, action.id)
      };
    default:
      return state;
  }
};
