import React from "react"
import "./footer.css"
import logo from "../images/ro_river_logo_04.jpg"
import facebookIcon from "../images/facebook-icon.svg"
import twitterIcon from "../images/twitter.svg"

const Footer = () => (
  <footer>
    <div className="container-fluid footer-wrapper">
      <div className="row no-glutters">
        <div className="logo col col-lg-3 col-sm-3">
          <img src={logo} alt="logo" />
        </div>
        <div className="col-6 col-lg-6 col-sm-6">
          <div className="copyright">
            <h2 className="text-copyright">
              Bản quyền thuộc về 2019 &#169; Rô River
            </h2>
            <p>info@roriver.vn</p>
          </div>
        </div>
        <div className="col col-lg-3 col-sm-3">
          <div className="icon-social">
            <i className="icon">
              <img src={facebookIcon} />
            </i>
            <i className="icon">
              <img src={twitterIcon} />
            </i>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default Footer
