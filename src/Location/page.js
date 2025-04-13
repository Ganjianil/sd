import React from "react";
import "./stylesheet.css"
const page = () => {
  return (
    <div>
      <div className="find">
        <h2>Find Us</h2>{" "}
      </div>

      <div className="findmap">
        <p className="lcs">Central Main Road, Uppal, Hyderabad, Telangana</p>
        <iframe className="maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.0628273558665!2d78.563581!3d17.396657!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93f0f7f7c10b%3A0x5bbebc9c4b48422b!2sCentral%20Main%20Road%2C%20Uppal%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1680767401234!5m2!1sen!2sin"
          width="600"
          height="400"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default page;
