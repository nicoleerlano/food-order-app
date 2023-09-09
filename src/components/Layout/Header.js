import { Fragment } from "react";
import foodImage from "./../../assets/food.avif";
import classes from "./Header.module.css";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={foodImage} alt="A table with Korean food" />
      </div>
    </Fragment>
  );
};

export default Header;
