import React from "react";
import { render, screen } from "@testing-library/react";

import ReactDom from "react-dom";
import App from "./App";
import TextField from "@material-ui/core/TextField";

import { shallow } from "enzyme";
import LoginForm from "./container/LoginForm/LoginForm";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

it("rendes without craching", () => {
  const div = document.createElement("div");
  ReactDom.render(<App />, div);
  ReactDom.unmountComponentAtNode(div);
});

it("renders shallow", () => {
  const wrapper = shallow(<App />);
  expect(wrapper.contains(<LoginForm />)).toEqual(true);
});

it("renders shallow TextField in Login", () => {
  const wrapper = shallow(<LoginForm />);
  expect(wrapper.contains(<TextField />)).toEqual(true);
});
