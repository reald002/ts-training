import React from 'react';
import {ITodoItem} from "../../core/interfaces";
import './index.css';

const TodoItem: React.FC<ITodoItem> = ({id, checked, text, onRemoveTodo, onCheckboxClick}) => {

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
