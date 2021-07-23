import axios from 'axios';
import { takeEvery, put, fork, all } from 'redux-saga/effects';
import { LOAD_TODOS, REMOVE_TODO, TOGGLE_TODO } from './types';
import { putTodos } from './actions';
import { ITodo } from '../core/todoInterface';
import { IRemoveTodo, IToggleTodo } from '../core/actionInterface';
import { store } from './index';

/** GET TODOS */
function* workerLoadTodos() {
  try {
    const data: ITodo[] = yield axios.get('http://localhost:3001/todos').then(res => res.data);

    yield put(putTodos(data));
  } catch (e) {
    console.log(e);
  }
}

function* watcherLoadTodos() {
  yield takeEvery(LOAD_TODOS, workerLoadTodos);
}

/** TOGGLE TODO */
function* workerToggleTodo({ id }: IToggleTodo) {
  try {
    const currentTodo: Partial<ITodo> | undefined = store.getState().todos.data.find(todo => todo._id === id);

    yield axios.patch(`http://localhost:3001/todos/${id}`, currentTodo);
  } catch (e) {
    console.log(e);
  }
}

function* watcherToggleTodo() {
  yield takeEvery(TOGGLE_TODO, workerToggleTodo);
}

/** REMOVE TODO */
function* workerRemoveTodo({ id }: IRemoveTodo) {
  try {
    yield axios.delete(`http://localhost:3001/todos/${id}`);
  } catch (e) {
    console.log(e);
  }
}

function* watcherRemoveTodo() {
  yield takeEvery(REMOVE_TODO, workerRemoveTodo);
}

export default function* rootSaga () {
  yield all([
    fork(watcherLoadTodos),
    fork(watcherToggleTodo),
    fork(watcherRemoveTodo),
  ]);
}
