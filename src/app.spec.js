import "jest-dom/extend-expect";
import React from "react";
import { render } from "react-testing-library";
import "react-testing-library/cleanup-after-each";
import App from "./app";

describe("app", () =>
{
    it("Runs and passes", () =>
    {
        render(<App />)
    })
})