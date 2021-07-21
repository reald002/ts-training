import React from 'react';
import './index.css';

interface ITodoItemProps {
  id: string,
  checked: boolean,
  text: string,
  onRemoveTodo: (id: string) => void,
  onCheckboxClick: (id: string) => void
}

const TodoItem: React.FC<ITodoItemProps> = ({ id, checked, text, onRemoveTodo, onCheckboxClick }) => {

  const handleRemoveBtnClick = (): void => {
    onRemoveTodo(id);
  };

  const handleCheckboxClick = (): void => {
    onCheckboxClick(id);
  };

  return (
    <li className="todo-item">
      <input className="checkbox" checked={checked} onChange={handleCheckboxClick} type="checkbox" id={id} />
      <label htmlFor={id}/>
      <span className="text">{text}</span>
      <button className="remove-btn" onClick={handleRemoveBtnClick}>&#215;</button>
    </li>
  );
};

export default TodoItem;
