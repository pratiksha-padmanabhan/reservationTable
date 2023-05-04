import React, { useEffect } from "react";
import { useState } from "react";
// import AnimatePresence from '@chakra-ui/transition'
import DatePicker from "react-datepicker";
import { fetchAPI, submitAPI } from "./bookingsAPI";
import { useReducer } from "react";
import './BookingForm.css'
// import {withRouter} from 'react-router-dom';

import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import * as Yup from "yup";
//date-date;time-dropdown;noofguests-number;occasion-dropdown

let today = new Date();
let todaystr = today.toString();
const validationSchema = Yup.object().shape({
  date: Yup.date()
    .required("Date is required")
    .min(`Please enter any date after"+ ${todaystr}`)
    .nullable()
    .default(undefined), //to do
  time: Yup.string().required("Choose time from the given options"),
  // .email("Invalid email address")
  noOfGuests: Yup.number()
    .max(10, "Maximum of 10 guests allowed")
    .required("Please enter number of guests"),
  occasion: Yup.string().required("Please enter ocassion"),
});

function AvailableTimingOptions(props) {
  const timingOptions = props.availableTimes.map((timing) => (
    <option>{timing}</option>
  ));
  return <>{timingOptions}</>;
}

// const availableTimesOptions=((availableTimes)=>
//       <option>{timing}</option>
// );

// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <li>{number}</li>
//   );
//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<NumberList numbers={numbers} />);

function BookingForm() {
  // useEffect(()=>{
  //   fetch('https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js')
  //   .then((response)=>response.fetchAPI(formik.values.date))
  //   // .then((jsonData)=>console.log())
  //   .then((actualData)=>setAvailableTimes(actualData))
  //   // .catch((error)=>console.log(error))
  // const [availableTimes,setAvailableTimes]=useState({});
  //   ;},[]);

  // const availableTimes =['17:00','18:00','19:00','20:00','21:00','22:00'];

  function updateTimes(date) {
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer(updateTimes, output);

  // const [isSubmitting, setSubmitting] = useState(false);
  const formik = useFormik({
    initialValues: {
      date: Yup.date, //to do
      time: undefined,
      noOfGuests: undefined,
      occasion: "Birthday",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, 2));
      submitAPI(values);

    
      // // alert(JSON.stringify(values, null, 2));
      // setSubmitting(true)
      // console.log(isSubmitting);
      // console.log("-------");
      // setSubmitting(true);
      // console.log(isSubmitting);
      
      // // Here you can submit the form data to your backend or perform any other action
      // console.log(values);
      // alert(values.toString());
      // resetForm({values:''});
    },
    // validator:(() => ({})),
  });

  return (
    <>
      <div id="headingBookingForm" style={{backgroundColor:"#495e57",borderBlockWidth:"3px", color:"#f4ce14"}}>Booking Form</div>
      <Box maxW="md" mx="auto">
        <form onSubmit={formik.handleSubmit}>
          <FormControl isInvalid={formik.touched.date && formik.errors.date}>
            <FormLabel htmlFor="date" className="formFields" style={{fontSize:"34px"}}>Date:</FormLabel>
            {/* <DateInput
  label={intl.formatMessage({ id: 'start_date.label' })}
  name="start_date"
  placeholder={intl.formatMessage({ id: 'start_date.placeholder' })}
/> */}
            <Input
              id="date"
              date="date"
              type="date"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.date}
              className="formInput"
              style={{borderBlockColor:"#495e57",borderBlockWidth:"3px"}}
            />
            <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
            {/* {!!(formik.touched.date && formik.errors.date) ? (
        <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
       ) : null} */}
            {/* // above will not work cause isInvalid is needed and so need to manipulate isInvalid */}
          </FormControl>

          <FormControl
            mt={4}
            isInvalid={formik.touched.time && formik.errors.time}
          >
            <FormLabel htmlFor="time" className="formFields" style={{fontSize:"34px"}}>Choose Time: </FormLabel>
            <label
              id="time"
              name="time"
              // type="time"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.time}
              className="formInput"
              style={{borderBlockColor:"#495e57",borderBlockWidth:"3px", width:"100px"}}
            >
              <select id="time">
                <option> </option>
                {/* <option> */}
                <AvailableTimingOptions availableTimes={availableTimes} />
                {/* </option> */}

                {/* <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option> */}
              </select>
            </label>
            <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
            {/* {formik.touched.time && formik.errors.time ? (
        <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
       ) : null} */}
          </FormControl>

          <FormControl
            mt={4}
            isInvalid={formik.touched.noOfGuests && formik.errors.noOfGuests}
          >
            <FormLabel htmlFor="noOfGuests" className="formFields" style={{fontSize:"34px"}}>
              Number of Guests:
            </FormLabel>
            <Input
              id="noOfGuests"
              name="noOfGuests"
              type="number"
              min={1}
              max={10}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.noOfGuests}
              className="formInput"
              style={{borderBlockColor:"#495e57",borderBlockWidth:"3px"}}

            />
            {!!(formik.touched.noOfGuests && formik.errors.noOfGuests) ? (
              <FormErrorMessage>{formik.errors.noOfGuests}</FormErrorMessage>
            ) : null}
          </FormControl>

          <FormControl
            mt={4}
            isInvalid={formik.touched.occasion && formik.errors.occasion}
          >
            <FormLabel htmlFor="occasion" className="formFields" style={{fontSize:"34px"}}>Occasion:</FormLabel>
            <label
              id="occasion"
              name="occasion"
              type="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.occasion}
              className="formInput"
              style={{borderBlockColor:"#495e57",borderBlockWidth:"3px"}}

            >
              <select id="occasion">
              <option> </option>
                <option>Birthday</option>
                <option>Anniversary</option>
              </select>
            </label>
            <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
            {/* {!!(formik.touched.occasion && formik.errors.occasion) ? (
                          <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>) : null} */}
            {/* <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage> */}
          </FormControl>

          <Button
            mt={4}
            colorScheme="teal"
            // isLoading={isSubmitting}
            type="submit"
            id="reserveATableButton"
          >
            Reserve A Table!
          </Button>
        </form>
      </Box>
    </>
  );
}
export default BookingForm;
