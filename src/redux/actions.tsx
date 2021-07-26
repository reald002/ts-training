import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO, LOAD_TODOS, PUT_TODOS } from './types';
import { IAddTodo, ILoadTodos, IPutTodos, IRemoveTodo, IToggleTodo } from '../core/actionInterface';
import { ITodo } from '../core/todoInterface';

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

export const loadTodos = (): ILoadTodos => {
  return {
    type: LOAD_TODOS
  };
};

export const putTodos = (data: ITodo[]): IPutTodos => {
  return {
    type: PUT_TODOS,
    data
  };
};
