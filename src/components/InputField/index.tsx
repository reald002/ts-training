import React, { KeyboardEvent } from "react";
import './index.css';

interface IInputFieldProps {
  visible: boolean,
  onEnterClick: (value: string) => void,
  onToggleAllClick: () => void
}

const InputField: React.FC<IInputFieldProps> = ({ visible, onEnterClick, onToggleAllClick }) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if(event.key !== 'Enter' || (event.target as HTMLInputElement).value === '') {
      return;
    } else {
      console.log(event.key);
      onEnterClick((event.target as HTMLInputElement).value);
      (event.target as HTMLInputElement).value = '';
    }
  };

  const handleToggleAllClick = () => {
    onToggleAllClick();
  };

  return (
    <div className="input-block">
      <button onClick={handleToggleAllClick} style={{ display: visible ? 'block' : 'none' }} className="toggle-all">❯</button>
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
