import React, { KeyboardEvent } from "react";
import './index.css';

interface IInputFieldProps {
  visible: boolean,
  onEnterClick: (value: string) => void,
  onToggleAllClick: () => void
}

const InputField = ({ visible, onEnterClick, onToggleAllClick }: IInputFieldProps): JSX.Element => {

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    const isEnterKey = event.key === 'Enter';
    const eventTarget = (event.target as HTMLInputElement);

    if (isEnterKey && eventTarget.value) {
      onEnterClick(eventTarget.value);
      eventTarget.value = '';
    }
  };

  const handleToggleAllClick = (): void => {
    onToggleAllClick();
  };

  return (
    <div className="input-block">
      {visible &&
        <button
          onClick={handleToggleAllClick}
          className="toggle-all">❯
        </button>
      }
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
