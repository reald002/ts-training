import {ITodo, ITodoState} from '../core/interfaces';

export const addTodoFunc = (state: ITodoState, text: string): ITodo[] => {
  const id: number = Date.now();
  const { data } = state;
  data.push({
    id, text, checked: false
  });
  return data;
};

export const removeTodoFunc = (state: ITodoState, id: string | number): ITodo[] => {
  return state.data.filter(todo => todo.id != id);
};

export const toggleTodoFunc = (state: ITodoState, id: string | number): ITodo[] => {
  return state.data.map(todo => (
          todo.id == id
          ? { id: todo.id, text: todo.text, checked: !todo.checked }
          : todo
    ));
};
