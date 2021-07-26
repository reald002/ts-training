import { ITodo } from './todoInterface';

export interface ITodoState {
  data: ITodo[],
  loadingData: boolean,
  success: boolean
}
