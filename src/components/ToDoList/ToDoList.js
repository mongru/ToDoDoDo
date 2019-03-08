import React from "react";
import PropTypes from "prop-types";

import "./ToDoList.scss";

const ToDoList = ({ todos, deleteTodo, completeTodo }) => {
  const todoItems = todos.map(todo => (
    <li key={todo.id}>
      <button
        type="button"
        className="btn btn--delete"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
        <i className="fas fa-minus-circle" />
      </button>

      <span
        className="todo__text"
        style={{
          textDecoration: todo.completed ? "line-through" : "",
          color: todo.completed ? "lightgrey" : ""
        }}
      >
        {todo.text}
      </span>

      <span
        onClick={() => completeTodo(todo.id)}
        style={{
          color: todo.completed ? "orange" : "lightgrey"
        }}
        className="todo__icon"
      >
        <i className="fas fa-check-circle" />
      </span>
    </li>
  ));

  return (
    <div className="list__container">
      <ul className="todo__list">{todoItems}</ul>
    </div>
  );
};

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired
    })
  ).isRequired,
  deleteTodo: PropTypes.func
};

export default ToDoList;
