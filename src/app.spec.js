import React from "react";
import { render } from "react-testing-library";
import App from "./app";

describe("app", () => {
  it("Runs and passes", () => {
    render(<App />);
  });
});
