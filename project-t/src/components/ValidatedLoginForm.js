import React from "react";
import logo from "../img/logo.png";
import logo1 from "../img/passlogo.png";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";

const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(true);
      }, 500);
    }}
    validate={values => {
        let errors = {};
        if (!values.email) {
          errors.email = "Required";
        } else if (!EmailValidator.validate(values.email)) {
          errors.email = "Invalid email address.";
        }
    
        const passwordRegex = /(?=.*[0-9])/;
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Password must be 8 characters long.";
        } else if (!passwordRegex.test(values.password)) {
          errors.password = "Invalid password. Must contain one number.";
        }
    
        return errors;
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        password: Yup.string()
          .required("No password provided.")
          .min(8, "Password is too short - should be 8 chars minimum.")
          .matches(/(?=.*[0-9])/, "Password must contain a number.")
      })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;

      return (
        <>
        <div className="container">
        <div className="outer">
          <h1>
            <span>Sign in</span>
          </h1>
          <span id="span">Login to manage your account</span>
          <form onSubmit={handleSubmit}>
            <nav className="navbar">
              <div className="icoemail">
                <img id="logo" height="20px" width="22px" src={logo} alt="" />
                <label htmlFor="email"></label>
                <input
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.email && touched.email && "error"}
                />
              </div>
                {errors.email && touched.email && (
                <div id="error3">{errors.email}</div>
                )}
              <div className="passico">
                <img id="logo1" height="20px" width="22px" src={logo1} alt="" />
                <label htmlFor="password"></label>
                {/* <input minLength="4" name='password' maxLength="10" placeholder='Enter you password'onChange={checkPassword} type="password" id='pass' required/> */}
                <input
                id="pass"
                name="password"
                type="password"
                placeholder="Enter your password"
                value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
                className={errors.password && touched.password && "error"}
                />
              </div>
              {errors.password && touched.password && (
                <div id="error3">{errors.password}</div>
                )}
              {/* <span id="error3">{error3}</span> */}
              <button className="btn" type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </nav>
          </form>
          <div></div>
        </div>
      </div>
      </>
      );
    }}
  </Formik>
);

export default ValidatedLoginForm;