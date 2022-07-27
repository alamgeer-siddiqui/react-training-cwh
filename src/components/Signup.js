import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup(props) {
  const validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");

  const [email, setemail] = useState("");
  const [EmailErr, setEmailErr] = useState("");

  const [password, setpassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");

  const role = "{USER}";

  let navigator = useNavigate();
  async function Signup() {
    const url = "http://localhost:4000/signup";

    let signupData = {
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
      role,
    };
    let response = await axios.post(url, signupData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    response.status === 201
      ? alert("Account Created Successful")
      : alert(response.data.responseMsg);
    response.data.responseCode === 200
      ? navigator("/signin")
      : navigator("/signup");
  }

  return (
    <>
      <div className="card-body p-md-5">
        <div className="row justify-content-center">
          <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
              Sign up
            </p>

            <form className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    onChange={(e) => setfirstName(e.target.value)}
                    value={firstName}
                  />
                  <label className="form-label" for="form3Example1c">
                    First Name
                  </label>
                </div>
              </div>
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="text"
                    id="form3Example1c"
                    className="form-control"
                    onChange={(e) => {
                      setlastName(e.target.value);
                    }}
                    value={lastName}
                  />
                  <label className="form-label" for="form3Example1c">
                    Last Name
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="email"
                    id="form3Example3c"
                    className="form-control"
                    onChange={(e) => {
                      setemail(e.target.value);
                      email.match(validRegex)
                        ? setEmailErr("")
                        : setEmailErr("--invalid email--");
                    }}
                    value={email}
                  />
                  <label className="form-label" for="form3Example3c">
                    Your Email <span className="text-danger">{EmailErr}</span>
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    id="form3Example4c"
                    className="form-control"
                    onChange={(e) => setpassword(e.target.value)}
                    value={password}
                  />
                  <label className="form-label" for="form3Example4c">
                    Password{" "}
                    {password.length < 4 && password.length !== 0 ? (
                      <span className="text-danger">
                        {"--Invalid password--"}
                      </span>
                    ) : (
                      <span></span>
                    )}
                  </label>
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <input
                    type="password"
                    id="form3Example4cd"
                    className="form-control"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    value={confirmPassword}
                  />
                  <label className="form-label" for="form3Example4cd">
                    Repeat your password{" "}
                    {confirmPassword !== password ? (
                      <span className="text-danger">
                        {"--Password not matched--"}
                      </span>
                    ) : (
                      <></>
                    )}
                  </label>
                </div>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <button
                  type="button"
                  className="btn btn-primary btn-lg"
                  onClick={Signup}
                >
                  Register
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
              className="img-fluid"
              alt="Sample_image"
            />
          </div>
        </div>
      </div>
    </>
  );
}
