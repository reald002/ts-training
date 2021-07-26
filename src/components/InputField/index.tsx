import React, { KeyboardEvent } from 'react';
import './index.css';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/actions';

const InputField = (): JSX.Element => {
  const dispatch = useDispatch();

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const isEnterKey = event.key === 'Enter';
    const eventTarget = (event.target as HTMLInputElement);

    if (isEnterKey && eventTarget.value) {
      dispatch(addTodo(eventTarget.value));
      eventTarget.value = '';
    }
  };

  return (
    <div className="input-block">
      <input
        className="input-field"
        type="text"
        onKeyDown={handleKeyDown}
        placeholder="What needs to be done?"
      />
    </div>
  );
};

export default InputField;
