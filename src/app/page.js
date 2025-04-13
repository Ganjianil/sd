import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./stylesheet.css";
import Banner from "../Banner/page.js"
import Catgories from "./Catagories/page.js"
import About from "./About/page.js"
import Testimonials from "../Testominals/page.js"
import Location from "../Location/page.js"
import Contact from "./Contact/page.js";
import Work from "./Works/page.js"
const page = () => {
  return (
    <>
      <div className="header">
        <div>
          <div className="bheader">
            <h5 className="b3header">Nandini Brass & Silver Metals</h5>
          </div>
        </div>
        <div>
          <div className="b2header container">
            <div>
              <input
                className="form-control clocation"
                type="text"
                placeholder="LOCATION"
              ></input>
            </div>
            <div className="d-flex align-items-center ">
              <div className="">
                <input
                  className="form-control cinput"
                  type="text"
                  placeholder="SEARCH FOR REQUIRED"
                ></input>
              </div>
              <div className="clsd">
                {" "}
                <span>Search</span>
              </div>
            </div>
            <div>Signout</div>
            <div>Login</div>
            <div>Contact us</div>
          </div>
        </div>
      </div>
      <div className="marquediv">
        <marquee>
          <h5 className="mtext">Coustomized Orders Are Taken From Any Where</h5>
        </marquee>
      </div>
      <div>
        <div className="clsds">
          <div className="b22header">
            <input
              className="form-control cinput2"
              type="text"
              placeholder="SEARCH FOR REQUIRED"
            ></input>
          </div>
          <div className="clsd2">
            {" "}
            <span>Search</span>
          </div>
        </div>
      </div>
     <Banner/>
     <Work/>
     {/* <Catgories /> */}
     <About/>
     <Testimonials/>
     <Location />
     <Contact />
   
    </>
  );
};

export default page;
