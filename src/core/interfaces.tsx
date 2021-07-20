export interface ITodoItem {
  id: string,
  checked: boolean,
  text: string,
  onRemoveTodo: (id: string) => void,
  onCheckboxClick: (id: string) => void
}
