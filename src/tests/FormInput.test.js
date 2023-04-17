import { fireEvent, render, screen } from "@testing-library/react";
import { formData } from "../constants/data";
import FormInput from "../components/FormInput/FormInput";

test("Renders label", () => {
  render(
    <>
      <FormInput data={formData[3]} />
      <FormInput data={formData[4]} />
    </>
  );

  const guestsInput = screen.getByText("Number of guests");
  expect(guestsInput).toBeInTheDocument();
});

test("Shows error message when entering an invalid number of guests", () => {
  render(
    <>
      <FormInput data={formData[3]} />
      <FormInput data={formData[4]} />
    </>
  );

  const guestsInput = screen.getByLabelText(/Number of guests/);
  fireEvent.change(guestsInput, { target: { value: "a" } });
  const otherInput = screen.getByLabelText(/Choose time/);
  fireEvent.click(otherInput);
  const errorMessage = screen.getByText("Choose a number from 1 to 10");
  expect(errorMessage).toBeVisible();
});
