import React from "react";
import "./index.css";

import { FiFacebook } from "react-icons/fi";
import { BiLogoInstagram } from "react-icons/bi";
import { SlSocialTwitter } from "react-icons/sl";
import { PiYoutubeLogo } from "react-icons/pi";

const Header = () => {
  return (
    <div>
      <div className="container">
        <div className="follow-us">
          <p className="para">Follow us:-</p>
          <p>
            <FiFacebook className="icon" /> <BiLogoInstagram className="icon" />
            <SlSocialTwitter className="icon" />{" "}
            <PiYoutubeLogo className="icon" />
          </p>
        </div>

        <div className="call-container">
          <img
            src="https://wpdemo.zcubethemes.com/qeducato/wp-content/themes/qeducato/inc/assets/images/phone-call.png"
            alt=""
            className="image1"
          />
          <div>
            <p className="call-message">Call Now!</p>
            <p className="call-number">+91 7095 205 519</p>
          </div>
        </div>

        <div class="vl"></div>

        <div className="mail-container">
          <img
            src="https://wpdemo.zcubethemes.com/qeducato/wp-content/themes/qeducato/inc/assets/images/mailing.png"
            alt=""
            className="image2"
          />
          <div className="mail-flex">
            <p className="mail-message">Mail Now</p>
            <p className="mail-text">info@procorp.ltd</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
