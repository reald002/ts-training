import { ITodo } from './todoInterface';

export interface IActionType {
  type: string
}

export interface IAddTodo extends IActionType {
  text: string
}

export interface IRemoveTodo extends IActionType {
  id: string
}

export interface IToggleTodo extends IActionType {
  id: string
}

export interface IPutTodos extends IActionType {
  data: ITodo[]
}

export type ILoadTodos = IActionType;

export type TodoAction = IAddTodo & IRemoveTodo & IToggleTodo & IPutTodos;
