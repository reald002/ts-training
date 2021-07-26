import axios from 'axios';
import { takeEvery, put, fork, all } from 'redux-saga/effects';
import { ADD_TODO, LOAD_TODOS, REMOVE_TODO, PATCH_TODO, TOGGLE_TODO } from './types';
import { addTodoWithGeneratedId, endEditTodo, putTodos } from './actions';
import { ITodo } from '../core/todoInterface';
import { IAddTodo, IRemoveTodo, IPatchTodo, IToggleTodo } from '../core/actionInterface';
import { store } from './index';

/** GET TODOS */
function* workerLoadTodos() {
  try {
    const data: ITodo[] = yield axios
      .get(
        `${process.env.REACT_APP_SERVER_URL}/todos`)
      .then(res => res.data);

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
    if(!text) return;
    const data: ITodo = yield axios
      .post(
        `${process.env.REACT_APP_SERVER_URL}/todos`,
        { text })
      .then(res => res.data);

    yield put(addTodoWithGeneratedId(data.text, data._id));
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
    const currentTodo: Partial<ITodo> | undefined = store
      .getState().todos.data.find(todo => todo._id === id);

    yield axios.patch(`${process.env.REACT_APP_SERVER_URL}/todos/${id}`, currentTodo);
  } catch (e) {
    console.log(e);
  }
}

function* watcherToggleTodo() {
  yield takeEvery(TOGGLE_TODO, workerToggleTodo);
}

/** PATCH TODO */
function* workerPatchTodo({todo}: IPatchTodo) {
  try {
    const data: ITodo = yield axios
      .patch(
        `${process.env.REACT_APP_SERVER_URL}/todos/${todo._id}`,
        { text: todo.text })
      .then(res => res.data);

    yield put(endEditTodo(data));
  } catch (e) {
    console.log(e);
  }
}

function* watcherPatchTodo() {
  yield takeEvery(PATCH_TODO, workerPatchTodo);
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
    fork(watcherPatchTodo),
  ]);
}
