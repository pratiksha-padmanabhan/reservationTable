import Header from "../HeaderFooter/Header";
import BookingForm from "./BookingForm";
import './BookingForm.css'



function TermsAndConditions(){
    return(
        <>
        <div id="tnc" >*Please note the T&C. Once booked, cancellation of reservation will be at a fees of $25. Booking can be rescheduled to another date only once. To do so, please reach out to the team. (Contact information has been provided in the footer for reference.) </div>
        </>
    );
}

function BookingPage() {
    return (
<>
{/* <Header/> */}
<BookingForm/>
<TermsAndConditions/>
</>



    );
}

export default BookingPage;