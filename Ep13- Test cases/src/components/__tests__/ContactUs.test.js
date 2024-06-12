const { render, screen } = require("@testing-library/react");
import "@testing-library/jest-dom"; // for running assertion on the dom
const { default: ContactUs } = require("../ContactUs");

test("Should render a component", () => {
  render(<ContactUs />); //it will be render on to the jsDom

  // querying
  const heading = screen.getByRole("heading");
  const button = screen.getByRole("button");
  //screen provides so many methods to get an element...

  // assertion
  expect(heading).toBeInTheDocument();
  expect(button).toBeInTheDocument();
});

test("Should load 2 input boxes on to the screen", () => {
  render(<ContactUs />); //it will be render on to the jsDom

  const inputsBoxes = screen.getAllByRole("textbox");

  expect(inputsBoxes.length).toBe(2);
});
