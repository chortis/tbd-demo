import { render } from "vite";
import { Button } from "./Button";

describe("test the button", () => {
  const { getByTestId } = render(
    <Button data-testid="button">Button Text</Button>
  );

  expect(getByTestId("button").textContent).toBeVisible();
});
