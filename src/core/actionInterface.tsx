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

export type TodoAction = IAddTodo & IRemoveTodo & IToggleTodo;
