import { render } from "@testing-library/react";
import "@testing-library/react/cleanup-after-each";
import React from "react";
import ReactDOM from "react-dom";
import Dashboard from "./Dashboard.js";
import Display from "./Display.js";
it("renders without crashing", () => {
  render(<Dashboard />);
});

describe("<Dashboard />", () => {
  it("should update the numbers when people click a button", () => {
    const playersData = [];

    expect(players).toHaveLength(playersData.length);
  });
});
