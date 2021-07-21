export interface ITodo {
  readonly id: string | number,
  text: string,
  checked: boolean,
}

export interface ITodoState {
  data: ITodo[]
}

export interface IAddTodo {
  readonly type: string,
  text: string
}

export interface IRemoveTodo {
  readonly type: string,
  readonly id: string | number
}

export interface IToggleTodo {
  readonly type: string,
  readonly id: string | number
}

export interface ITodoAction {
  readonly type: string,
  readonly id: string | number,
  text: string,
  checked: boolean
}
