import {
  ADD_TODO,
  PATCH_TODO,
  TOGGLE_TODO,
  REMOVE_TODO,
  LOAD_TODOS,
  PUT_TODOS,
  ADD_TODO_WITH_GENERATED_ID,
  START_EDIT_TODO,
  END_EDIT_TODO
} from './types';
import {
  IAddTodo,
  IAddTodoWithGeneratedId, IEndEditTodo,
  ILoadTodos,
  IPutTodos,
  IRemoveTodo, IStartEditTodo,
  IPatchTodo, IToggleTodo
} from '../core/actionInterface';
import { ITodo } from '../core/todoInterface';

export const addTodo = (text: string): IAddTodo => {
  return {
    type: ADD_TODO,
    text
  };
};

export const addTodoWithGeneratedId = (text: string, id: string): IAddTodoWithGeneratedId => {
  return {
    type: ADD_TODO_WITH_GENERATED_ID,
    text,
    id
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

export const patchTodo = (todo: Pick<ITodo, "_id" | "text">): IPatchTodo => {
  return {
    type: PATCH_TODO,
    todo
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

export const startEditTodo = (id: string): IStartEditTodo => {
  return {
    type: START_EDIT_TODO,
    id
  };
};

export const endEditTodo = (todo: Partial<ITodo>): IEndEditTodo => {
  return {
    type: END_EDIT_TODO,
    todo
  };
};
