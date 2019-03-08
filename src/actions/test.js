import { submitTodo, deleteTodo } from ".";
import types from "../constants/";

describe("Actions", () => {
  const todoText = "Test the app";

  it("Should create an action to add a todo", () => {
    const expectedAction = {
      type: types.SUBMIT_TODO,
      id: 1,
      text: todoText,
      completed: false
    };

    expect(submitTodo(todoText)).toEqual(expectedAction);
  });

  it("Should create an action to delete a todo", () => {
    const expectedAction = {
      type: types.DELETE_TODO,
      id: 1
    };

    expect(deleteTodo(1)).toEqual(expectedAction);
  });
});
