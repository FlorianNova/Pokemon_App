import Heading from ".";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Heading>🏄🏄‍♀️🏄‍♂️</Heading>);
  const element = screen.getByText("🏄🏄‍♀️🏄‍♂️");
  expect(element).toBeInTheDocument();
});
