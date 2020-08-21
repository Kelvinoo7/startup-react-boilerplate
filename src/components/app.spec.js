import React from "react";
import { render } from "@testing-library/react";
import App from "./app";

describe("app", () => {
  it("Runs and passes", () => {
    render(<App />);
  });
});
