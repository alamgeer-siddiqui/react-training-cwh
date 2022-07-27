import React, { useState, useEffect } from "react";

export default function Dashboard(props) {
  const [loginData, setloginData] = useState();

  useEffect(() => {
    setloginData(JSON.parse(localStorage.getItem("loginData")));
  }, []);
  //   console.log(",---------->",loginData.data.user);
  console.log(loginData);
  return (
    <>
      <h1>Dashboard</h1>
      <br />
      {loginData ? (
        <>
          <div className="col col-md-9 col-lg-7 col-xl-5">
            <div className="card" style={{ borderRadius: "15px" }}>
              <div className="card-body p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <img
                      src=" https://cdn-icons-png.flaticon.com/512/1177/1177568.png"
                      alt="Generic placeholder_image"
                      className="img-fluid"
                      style={{ width: "180px", borderRadius: "10px" }}
                    />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <h5 className="mb-1">{loginData.user.firstName}</h5>
                    <p className="mb-2 pb-1" style={{ color: "#2b2a2a" }}>
                      {loginData.user.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
}
