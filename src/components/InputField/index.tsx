import React, { KeyboardEvent } from "react";
import { KEYS } from '../../core/constants';
import './index.css';

interface IInputFieldProps {
  visible: boolean,
  onEnterClick: (value: string) => void,
  onToggleAllClick: () => void
}

const InputField: React.FC<IInputFieldProps> = ({ visible, onEnterClick, onToggleAllClick }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key !== KEYS.enter || (event.target as HTMLInputElement).value === '') {
      return;
    } else {
      onEnterClick((event.target as HTMLInputElement).value);
      (event.target as HTMLInputElement).value = '';
    }
  };

  const handleToggleAllClick = () => {
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
