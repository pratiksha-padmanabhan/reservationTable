import {render,screen} from "@testing-library/react";
import BookingForm from "/Users/pratiksha/pratproj/src/BookingForm.js";

test('Booking Form is present',()=>{
    render(<BookingForm/>);
    const headingElement=screen.getByText("Booking Form");
    expect(headingElement).toBeInTheDocument();
})