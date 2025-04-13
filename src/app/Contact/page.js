import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
const page = () => {
  return (
    <>
      <div>
        <div className="contact">
          <h2>Contact US</h2>
        </div>
        <div className="dbox">
          <form>
            <div className="forms">
              <div className="forminput">
                <label for="name" className="for-label">
                  Name:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Enter name"
                  required
                />
              </div>
            </div>
            <div className="forms">
              <div className="forminput">
                <label for="email" className="for-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
            <div className="forms">
              <div className="forminput">
                <label for="number" className="for-label">
                  Number:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="number"
                  placeholder="Enter Phone number"
                  required
                />
              </div>
            </div>
            <div className="forms">
              <div className="forminput">
                <label for="city" className="for-label">
                  City:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="city"
                  placeholder="Enter City"
                  required
                />
              </div>
            </div>
            <div className="btnform">
              <button className="btn btn-primary w-35">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default page;
