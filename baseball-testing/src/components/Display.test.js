import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import React from "react";
import ReactDOM from "react-dom";
import Display from "./Display.js";

it("renders without crashing", () => {
  render(<Display />);
});
