import React, { useEffect } from 'react';
import TodoItem from './components/TodoItem';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { loadTodos } from './redux/actions';
import { RootType } from './redux';
import { ITodo } from './core/todoInterface';
import InputField from './components/InputField';

const App = (): JSX.Element => {
  const dispatch = useDispatch();
  const { loadingData }: any = useSelector<RootType>(state => state.todos);
  const { success }: any = useSelector<RootType>(state => state.todos);
  const { data: todos }: any = useSelector<RootType>(state => state.todos);

  useEffect((): void => {
    dispatch(loadTodos());
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>Todos)))</h1>
        <InputField />
        {loadingData &&
          <p style={{ color: 'black', padding: '20px' }}>loading...</p>
        }
        {!loadingData && success && !todos.length &&
          <p style={{ color: 'black', padding: '20px' }}>No todos :(</p>
        }
        {!loadingData && !success &&
        <p style={{ color: 'black', padding: '20px' }}>Server error(</p>
        }
        {todos?.slice().reverse().map(({ _id: id, text, checked, isEditing }: ITodo) => (
          <TodoItem key={id} id={id} checked={checked} text={text} isEditing={isEditing} />
        ))}
      </div>
    </div>
  );
};

export default App;
