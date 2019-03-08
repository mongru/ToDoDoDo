import React from "react";
import PropTypes from "prop-types";

import "./AddToDo.scss";

const AddTodo = ({ submitTodo }) => {
  let input;

  return (
    <div className="form__container">
      <form
        onSubmit={event => {
          event.preventDefault();
          submitTodo(input.value);
          input.value = "";
        }}
      >
        <label htmlFor="add-todo" className="todo__label">
          Task
        </label>

        <input
          id="add-todo"
          name="add-todo"
          className="todo__input"
          ref={element => {
            input = element;
          }}
        />

        <button type="submit" className="btn btn--submit">
          Add
          <i className="fas fa-plus-circle" />
        </button>
      </form>
    </div>
  );
};

AddTodo.propTypes = {
  submitTodo: PropTypes.func.isRequired
};

export default AddTodo;
