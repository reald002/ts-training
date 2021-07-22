import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from './types';
import { IAddTodo, IRemoveTodo, IToggleTodo } from '../core/actionInterface';

export const addTodo = (text: string): IAddTodo => {
  return {
    type: ADD_TODO,
    text
  };
};

export const removeTodo = (id: string): IRemoveTodo => {
  return {
    type: REMOVE_TODO,
    id
  };
};

export const toggleTodo = (id: string): IToggleTodo => {
  return {
    type: TOGGLE_TODO,
    id
  };
};
