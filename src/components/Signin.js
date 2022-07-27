import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signin(props) {
  let navigator = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPwd] = useState();
  const url = "http://localhost:4000/login";
  async function Login() {
    let loginData = { email, password };
    //   using FETCH method
    // let result= await fetch(url,{
    //     method:'POST',
    //     headers:{
    //         "Content-Type":"application/json",
    //         "Accept":"application/json"
    //     },
    //     body:JSON.stringify(loginData)
    // })
    // result=await result.json()

    //    using AXIOS method
    let result = await axios.post(url, loginData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
    });
    if (result.data.responseCode !== 200) {
      alert(result.data.responseMsg);
    }
    result.data.responseCode === 200
      ? navigator("/dashboard")
      : navigator("/signin");
    if (result.data.responseCode === 200) {
      localStorage.setItem("loginData", JSON.stringify(result.data.data));
    }
  }
  return (
    <>
      <section className=" text-center text-lg-start">
        <div className="card mb-3">
          <div className="row g-0 d-flex align-items-center">
            <div className="col-lg-4 d-none d-lg-flex">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                alt=" You are offline"
                className="w-100 rounded-5 rounded-tr-lg-0 rounded-bl-lg-5"
              />
            </div>
            <div className="col-lg-8">
              <div className="card-body py-5 px-md-5">
                <form>
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form2Example1"
                      className="form-control"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                      value={email}
                    />
                    <label className="form-label" for="form2Example1">
                      Email address
                    </label>
                  </div>

                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form2Example2"
                      className="form-control"
                      onChange={(e) => {
                        setPwd(e.target.value);
                      }}
                      value={password}
                    />
                    <label className="form-label" for="form2Example2">
                      Password
                    </label>
                  </div>

                  <div className="row mb-4">
                    <div className="col d-flex justify-content-center">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value=""
                          id="form2Example31"
                          checked
                        />
                        <label
                          className="form-check-label"
                          for="form2Example31"
                        >
                          {" "}
                          Remember me{" "}
                        </label>
                      </div>
                    </div>

                    <div className="col">
                      <a href="#!">Forgot password?</a>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="btn btn-primary btn-block mb-4"
                    onClick={Login}
                  >
                    Sign in
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
