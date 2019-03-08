import types from "../constants/";

let todoId = 0;

const nextId = () => {
  todoId += 1;
  return todoId;
};

export const submitTodo = text => ({
  type: types.SUBMIT_TODO,
  id: nextId(),
  text,
  completed: false
})

export const deleteTodo = id => ({
  type: types.DELETE_TODO,
  id,
})

export const completeTodo = id => ({
  type: types.COMPLETE_TODO,
  id
})
