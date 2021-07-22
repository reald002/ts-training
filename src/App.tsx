import React from 'react';
import TodoItem from './components/TodoItem';
import './App.css';

const handleTodoRemove = () => {
  console.log('todo removed');
};

const handleCheckboxClick = () => {
  console.log('checkbox clicked');
};

const App: React.FC = () => {
  return (
    <div className="App">
      <TodoItem id={'1'} checked={true} text={'123'} onRemoveTodo={handleTodoRemove} onCheckboxClick={handleCheckboxClick} />
    </div>
  );
};

export default App;
