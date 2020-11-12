import { render, fireEvent } from "@testing-library/react";
import CreateSession from "./index";

const testProps = {
  mentorId: 1,
  menteeId: 2,
};

test("Check button onClick changes", () => {
  const { getByText } = render(<CreateSession {...testProps} />);
  const button = getByText("Submit");
  fireEvent.click(button)
  expect(createSession).toHaveBeenCalled();
});
