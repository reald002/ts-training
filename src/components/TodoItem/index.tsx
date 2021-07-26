import React, { KeyboardEvent, LegacyRef, useEffect, useRef } from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { endEditTodo, removeTodo, startEditTodo, patchTodo, toggleTodo } from '../../redux/actions';
import { IRemoveTodo, IStartEditTodo, IEndEditTodo, IToggleTodo } from '../../core/actionInterface';

interface ITodoItemProps {
  id: string,
  checked: boolean,
  text: string,
  isEditing: boolean
}

const TodoItem = ({ id, checked, text, isEditing }: ITodoItemProps): JSX.Element => {
  const input: LegacyRef<any> = useRef<HTMLInputElement>();
  const dispatch = useDispatch();

  useEffect(() => {
    if(isEditing) {
      input.current.focus();
    }
  }, [isEditing]);

  const handleRemoveBtnClick = (): IRemoveTodo => dispatch(removeTodo(id));

  const handleCheckboxClick = (): IToggleTodo => dispatch(toggleTodo(id));

  const handleEditClick = (): IStartEditTodo => dispatch(startEditTodo(id));

  const handleBlur = (): IEndEditTodo => dispatch(endEditTodo({_id: id}));

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const isEnterKey = event.key === 'Enter';
    const eventTarget = (event.target as HTMLInputElement);

    if (isEnterKey && eventTarget.value) {
      dispatch(patchTodo({_id: id, text: eventTarget.value}));
    }
  };

  return (
    <li onClick={() => !isEditing && handleCheckboxClick()} className="todo-item">
      <input className="checkbox" checked={checked} type="checkbox" id={id} onClick={e => e.preventDefault()} />
      <label onClick={e => e.preventDefault()} htmlFor={id}/>
      {!isEditing
        && <span className="text">{text}</span>
      }
      {isEditing
        && <input onKeyDown={handleKeyDown} className="text" ref={input} type="text" onBlur={handleBlur}/>
      }
      <button
        className="edit-btn btn"
        onClick={(e) => {
          e.stopPropagation();
          handleEditClick();
        }}
      >&#9998;</button>
      <button className="remove-btn btn" onClick={handleRemoveBtnClick}>&#215;</button>
    </li>
  );
};

export default TodoItem;
