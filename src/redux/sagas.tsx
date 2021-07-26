import axios from 'axios';
import { takeEvery, put, fork, all } from 'redux-saga/effects';
import { ADD_TODO, LOAD_TODOS, REMOVE_TODO, TOGGLE_TODO } from './types';
import { putTodos } from './actions';
import { ITodo } from '../core/todoInterface';
import { IAddTodo, IRemoveTodo, IToggleTodo } from '../core/actionInterface';
import { store } from './index';

/** GET TODOS */
function* workerLoadTodos() {
  try {
    const data: ITodo[] = yield axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`).then(res => res.data);

    yield put(putTodos(data));
  } catch (e) {
    console.log(e);
  }
}

function* watcherLoadTodos() {
  yield takeEvery(LOAD_TODOS, workerLoadTodos);
}

/** ADD TODO */
function* workerAddTodo({ text }: IAddTodo) {
  try {
    yield axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, { text });
  } catch (e) {
    console.log(e);
  }
}

function* watcherAddTodo() {
  yield takeEvery(ADD_TODO, workerAddTodo);
}

/** TOGGLE TODO */
function* workerToggleTodo({ id }: IToggleTodo) {
  try {
    const currentTodo: Partial<ITodo> | undefined = store.getState().todos.data.find(todo => todo._id === id);

    yield axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, currentTodo);
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
    yield axios.delete(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`);
  } catch (e) {
    console.log(e);
  }
}

function* watcherRemoveTodo() {
  yield takeEvery(REMOVE_TODO, workerRemoveTodo);
}

/** ROOT SAGA */
export default function* rootSaga (): Generator {
  yield all([
    fork(watcherLoadTodos),
    fork(watcherAddTodo),
    fork(watcherToggleTodo),
    fork(watcherRemoveTodo),
  ]);
}
