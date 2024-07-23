import React from 'react';
import './Login.css';
import loginImage from '../Image/login.png';


function Login() {

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    const captcha = event.target.captcha.value;

    console.log({ email, password, captcha });
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="row border rounded-5 p-3 bg-white shadow box-area">
        <div
          className="col-md-6 rounded-4 d-flex justify-content-center align-items-center flex-column left-box"
          style={{ background: "#480938" }}
        >
          <div className="featured-image mb-3">
            <img src={loginImage} className="img-fluid" style={{ width: "250px" }} alt="Login" />
          </div>
          <p className="text-white fs-2" style={{ fontFamily: "'Courier New', Courier, monospace", fontWeight: 600 }}>
            Be Verified
          </p>
          <small
            className="text-white text-wrap text-center"
            style={{ width: "17rem", fontFamily: "monospace" }}
          >
            <strong>"Where every click leads to delight – welcome to CodeMunch"</strong>
          </small>
        </div>

        <div className="col-md-6 right-box">
          <div className="row align-items-center">
            <div className="header-text mb-4">
              <h2>Hello, User</h2>
              <p>We are happy to have you back.</p>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="input-group mb-3">
                <input
                  type="email"
                  className="form-control form-control-lg bg-light fs-6"
                  name="email"
                  placeholder="Email address"
                  required
                />
              </div>
              <div className="input-group mb-1">
                <input
                  type="password"
                  className="form-control form-control-lg bg-light fs-6"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
             
              <div className="input-group mb-3">
                <button type="submit" className="btn btn-lg btn-outline-dark mt-3 btn-primary w-100 fs-6">
                  Login
                </button>
              </div>
              <div className="text-center">
                <a
                  href="#"
                  className="btn btn-lg btn-outline-dark w-100 fs-6 mt-3 rounded-4 btn-register"
                >
                  New Admin? Register Yourself
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
