import React, { useState } from "react";

export default function About(props) {
  function stringContainsNumber(_string) {
    return /\d/.test(_string);
  }

  const [Name, setName] = useState("");
  const nameValidation = (event) => {
    setName(event.target.value);
  };
  const [Email, setEmail] = useState("");
  const [EmailErr, setEmailErr] = useState("");
  const emailValidation = (event) => {
    setEmail(event.target.value);
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (Email.match(validRegex)) {
      setEmailErr("");

      document.form1.text1.focus();

      return true;
    } else {
      setEmailErr("- Invalid email address !");

      //   document.form1.text1.focus();

      return false;
    }
  };
  const [Phone, setPhone] = useState("");
  const PhoneValidation = (event) => {
    setPhone(event.target.value);
  };

  return (
    <div className="contact3 py-5">
      <div className="row no-gutters">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="card-shadow ">
                <img
                  src="https://media.istockphoto.com/photos/got-a-problem-contact-us-picture-id1129113667?k=20&m=1129113667&s=170667a&w=0&h=TXHUBn3OW_FUpBC-flhsqPhmlYi4pTlt665483SnKhM="
                  className="img-fluid border border-2  rounded-circle"
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="contact-box ml-3">
                <h1
                  className={`font-weight-light text-${
                    props.ThemeMode === "light" ? "dark" : "light"
                  } mt-2`}
                >
                  Quick Contact
                </h1>
                <form className="mt-4">
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="name"
                          onChange={nameValidation}
                          value={Name}
                        />
                        <span className="text-danger">
                          {stringContainsNumber(Name) ? "- Invalid Name !" : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="email"
                          placeholder="email address"
                          onChange={emailValidation}
                          value={Email}
                        />
                        <span className="text-danger">
                          {Email === "" ? "" : EmailErr}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <input
                          className="form-control"
                          type="text"
                          placeholder="phone"
                          onChange={PhoneValidation}
                          value={Phone}
                        />
                        <span className="text-danger">
                          {Phone === ""
                            ? ""
                            : !stringContainsNumber(Phone)
                            ? "- Invalid Number !"
                            : ""}
                        </span>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-group mt-2">
                        <textarea
                          className="form-control"
                          rows="3"
                          placeholder="message"
                        ></textarea>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <button
                        type="submit"
                        className="btn btn-danger mt-3 text-white border-0 px-3 py-2"
                      >
                        <span> SUBMIT</span>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="card mt-4 border-0 mb-4">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail pl-0">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">Address</h6>
                        <p className="">
                          601 Sherwood Ave.
                          <br /> San Bernandino
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">Phone</h6>
                        <p className="">
                          251 546 9442
                          <br /> 630 446 8851
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <div className="card-body d-flex align-items-center c-detail">
                      <div className="mr-3 align-self-center">
                        <img
                          src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                          alt=""
                        />
                      </div>
                      <div className="">
                        <h6 className="font-weight-medium">Email</h6>
                        <p className="">
                          info@wrappixel.com
                          <br /> 123@wrappixel.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
