import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";

import { submitTodo, deleteTodo, completeTodo } from "../../actions/";

import Header from "../Header/Header";
import AddToDo from "../AddToDo/AddToDo";
import ToDoList from "../ToDoList/ToDoList";
import Footer from "../Footer/Footer";

const App = ({ todos, submitTodo, deleteTodo, completeTodo }) => (
  <div className="wrapper">
    <Header title="Just Do It!" />
    <main>
      <AddToDo submitTodo={submitTodo} />
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        completeTodo={completeTodo}
      />
    </main>
    <Footer author="Mogeee" date="2019" />
  </div>
);

App.propTypes = {
  submitTodo: PropTypes.func.isRequired,
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired
    })
  ).isRequired,
  deleteTodo: PropTypes.func,
  completeTodo: PropTypes.func
};

const mapStateToProps = state => state.todoListApp;

const mapDispatchToProps = dispatch => ({
  submitTodo: text => {
    if (text) {
      dispatch(submitTodo(text));
    }
  },

  deleteTodo: id => {
    dispatch(deleteTodo(id));
  },

  completeTodo: id => {
    dispatch(completeTodo(id));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
