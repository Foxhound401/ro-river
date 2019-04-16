import React from "react"
import "./footer.css"
import logo from "../images/ro_river_logo_04.jpg"
import facebookIcon from "../images/facebook-icon.svg"
import twitterIcon from "../images/twitter.svg"

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="logo col">
          <img src={logo} alt="logo" />
        </div>
        <div className="copyright col-6">
          <h2> ban quyen thuoc ve 2019 roriver</h2>
          <p>info@roriver.vn</p>
        </div>
        <div className="icon-social col">
          <i className="icon">
            <img src={facebookIcon} />
          </i>
          <i className="icon">
            <img src={twitterIcon} />
          </i>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
