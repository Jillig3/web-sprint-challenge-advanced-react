import React from "react";
import MutationObserver from 'mutationobserver-shim';
import { render, screen } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";
import userEvent from "@testing-library/user-event";

// Write up the two tests here and make sure they are testing what the title shows

test("renders without errors", () => {
    render(<CheckoutForm/>);
});

test("shows success message on submit with form details", async () => {
    render(<CheckoutForm/>);
    const fName = "Dustin";
    const lName = "Myers";
    const address = "505 Ezy St";
    const city = "New York";
    const state = "NY";
    const zip = "12345";

    const firstNameInput = screen.getByLabelText(/First Name:/i);
    userEvent.type(firstNameInput, fName);

    const lastNameInput = screen.getByLabelText(/Last Name:/i);
    userEvent.type(lastNameInput, lName);

    const addressInput = screen.getByLabelText(/Address:/i);
    userEvent.type(addressInput, address);

    const cityInput = screen.getByLabelText(/City:/i);
    userEvent.type(cityInput, city);

    const stateInput = screen.getByLabelText(/State:/i);
    userEvent.type(stateInput, state);

    const zipInput = screen.getByLabelText(/Zip:/i);
    userEvent.type(zipInput, zip);

    const button = screen.getByRole("button");
    userEvent.click(button);

    
});


