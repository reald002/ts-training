import { ITodo } from './todoInterface';

export interface IActionType {
  type: string
}

export interface IAddTodo extends IActionType {
  text: string
}

export interface IAddTodoWithGeneratedId extends IActionType {
  text: string,
  id: string
}

export interface IRemoveTodo extends IActionType {
  id: string
}

export interface IPatchTodo extends IActionType {
  todo: Pick<ITodo, "_id" | "text">
}

export interface IToggleTodo extends IActionType {
  id: string
}

export interface IPutTodos extends IActionType {
  data: ITodo[]
}

export interface IStartEditTodo extends IActionType {
  id: string
}

export interface IEndEditTodo extends IActionType{
  todo: Partial<ITodo>
}

export type ILoadTodos = IActionType;

export type TodoAction =
  IAddTodo
  & IRemoveTodo
  & IPatchTodo
  & IPutTodos
  & IAddTodoWithGeneratedId
  & IStartEditTodo;
