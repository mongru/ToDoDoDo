import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import TodoList from "../ToDoList";

configure({ adapter: new Adapter() });

describe("TodoList component", () => {
  const todos = [
    {
      id: 1,
      text: "A todo"
    }
  ];

  const component = shallow(<TodoList todos={todos} />);

  it("Should render successfully", () => {
    expect(component.exists()).toEqual(true);
  });

  it("Should display a todo when passed in as a prop", () => {
    expect(component.find(".todo__text").text()).toEqual(todos[0].text);
  });
});
