import { ITodo } from './todoInterface';

export interface ITodoState {
  data: ITodo[],
  loading: boolean,
  success: boolean
}
