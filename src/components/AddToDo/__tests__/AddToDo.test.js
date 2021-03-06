import React from "react";
import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import AddTodo from "../AddToDo";

configure({ adapter: new Adapter() });

describe("AddTodo component", () => {
  let component;
  const submitMock = jest.fn();

  beforeEach(() => {
    component = shallow(<AddTodo submitTodo={submitMock} />);
  });

  it("Should render successfully", () => {
    expect(component.exists()).toEqual(true);
  });

  it("Should have one input", () => {
    expect(component.find(".todo__input").length).toEqual(1);
  });

  describe("Add todo button", () => {
    it("Should exist", () => {
      expect(component.find(".btn--submit").length).toEqual(1);
    });

    it("Should call the submitTodo function when clicked", () => {
      component = mount(<AddTodo submitTodo={submitMock} />);

      expect(submitMock.mock.calls.length).toEqual(0);
      component.find("form").simulate("submit");
      expect(submitMock.mock.calls.length).toEqual(1);
    });
  });
});
