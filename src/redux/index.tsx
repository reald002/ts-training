import { combineReducers } from 'redux';
import { createStore } from 'redux';
import { todoReducer } from './todoReducer';

const rootReducer = combineReducers({
  todos: todoReducer
});

export type RootType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);
