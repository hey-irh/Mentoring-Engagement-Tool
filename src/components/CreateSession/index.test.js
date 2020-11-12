import { render, fireEvent } from "@testing-library/react";
import CreateSession from "./index";

const testProps = {
  mentorId: 1,
  menteeId: 2,
};

test("Create Session should render correctly with props", () => {
  const { getByTestId } = render(<CreateSession {...testProps} />);
  const createSession = getByTestId("createSession");
  expect(createSession).toBeInTheDocument();
});
