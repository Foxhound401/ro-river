import React from "react"
import "./emailSection.css"

const EmailSection = () => (
  <section className="email-section container-fluid">
    <div className="row">
      <div className="col pre-text-email">
        <h1>Đăng kí nhận thông báo</h1>
        <h3>
          Hãy để lại email để nhận được những thông tin mới nhất.
          <br /> Cam kết không spam.
        </h3>
      </div>
    </div>
    <div className="row email-input-wrapper ">
      <div className="wrapper-email">
        <input
          className="email-box"
          type="email"
          value=""
          placeholder="   Email cua ban"
        />
      </div>
      <div className="wrapper-button">
        <input className="button-register" type="submit" value="Dang ki" />
      </div>
    </div>
  </section>
)

export default EmailSection
