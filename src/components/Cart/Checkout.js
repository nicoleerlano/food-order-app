import { useRef, useState } from "react";
import classes from "./Checkout.module.css";
import useInput from "../../hooks/use-input";

const isNotEmpty = (value) => value.trim() !== "";
const isFiveChars = (value) => value.trim().length === 5;

const Checkout = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetNameInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredStreet,
    isValid: enteredStreetIsValid,
    hasError: streetInputHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreetInput,
  } = useInput(isNotEmpty);
  const {
    value: enteredPostal,
    isValid: enteredPostalIsValid,
    hasError: postalInputHasError,
    valueChangeHandler: postalChangeHandler,
    inputBlurHandler: postalBlurHandler,
    reset: resetPostalInput,
  } = useInput(isFiveChars);
  const {
    value: enteredCity,
    isValid: enteredCityIsValid,
    hasError: cityInputHasError,
    valueChangeHandler: cityChangeHandler,
    inputBlurHandler: cityBlurHandler,
    reset: resetCityInput,
  } = useInput(isNotEmpty);

  let formIsValid = false;

  if (enteredName && enteredStreet && enteredPostal && enteredCity) {
    formIsValid = true;
  }

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) {
      return;
    }

    console.log(enteredName, enteredStreet, enteredPostal, enteredCity);

    props.onConfirm({
      name: enteredName,
      street: enteredStreet,
      postal: enteredPostal,
      city: enteredCity,
    });
  };

  const nameControlClasses = `${classes.control} ${
    !nameInputHasError ? "" : classes.invalid
  }`;
  const streetControlClasses = `${classes.control} ${
    !streetInputHasError ? "" : classes.invalid
  }`;
  const postalControlClasses = `${classes.control} ${
    !postalInputHasError ? "" : classes.invalid
  }`;
  const cityControlClasses = `${classes.control} ${
    !cityInputHasError ? "" : classes.invalid
  }`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameControlClasses}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          ref={nameInputRef}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameInputHasError && <p>Please enter a valid name.</p>}
      </div>
      <div className={streetControlClasses}>
        <label htmlFor="street">Street</label>
        <input
          type="text"
          id="street"
          ref={streetInputRef}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
        {streetInputHasError && <p>Please enter a valid street.</p>}
      </div>
      <div className={postalControlClasses}>
        <label htmlFor="postal">Postal Code</label>
        <input
          type="text"
          id="postal"
          ref={postalInputRef}
          onChange={postalChangeHandler}
          onBlur={postalBlurHandler}
        />
        {postalInputHasError && <p>Please enter a valid postal code.</p>}
      </div>
      <div className={cityControlClasses}>
        <label htmlFor="city">City</label>
        <input
          type="text"
          id="city"
          ref={cityInputRef}
          onChange={cityChangeHandler}
          onBlur={cityBlurHandler}
        />
        {cityInputHasError && <p>Please enter a valid city.</p>}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancel}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
