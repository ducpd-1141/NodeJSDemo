import { handleActions } from 'redux-actions';

import { addTodo, deleteTodo } from '../actions/todoAction';

export default handleActions({
  [deleteTodo]: (state, action) => ({
    ...state,
    ...action.payload,
  }),
  [addTodo]: (state, action) => ({
    ...state,
    ...action.payload,
  })
}, {})
