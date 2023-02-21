import React from 'react'
import '../auth/Login.css'
import String from '../../utils/String'
import login_footer from '../../assets/images/rafiki.svg'
import pattern from '../../assets/images/pattern.svg'
import { Link } from 'react-router-dom'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
const Login = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 p-0">
          <div className="left-div">
            <div className="welcome-div mt-4">
              <h1 className="welcome-immence">Welcome, immencer!</h1>
              <p className="signing-to-continue">{String.signin_to_continue}</p>
            </div>

            {/* form div start */}
            <div className="Auth-form-container">
              <form className="Auth-form mt-4">
                <div className="form-group mt-1">
                  <label>
                    Email address <span className="error">*</span>
                  </label>
                  <input
                    type="email"
                    className="form-control mt-1"
                    placeholder="Enter Your Email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label>
                    Password <span className="error">*</span>
                  </label>
                  <Link
                    className="text-decoration-none forgot-password"
                    to={`/auth-reset`}
                  >
                    Forgot Password ?
                  </Link>
                  <input
                    type="password"
                    className="form-control mt-1"
                    placeholder="Enter Your Password"
                  />
                </div>
                <div className="d-grid gap-2 mt-3">
                  <button type="submit" className="btn sign-btn">
                    Sign In
                  </button>
                </div>
              </form>
            </div>
            {/* form div end */}

            <div className="login-footer mt-3">
              <img
                src={login_footer}
                alt="Your SVG"
                className="login-footer-img"
              />
            </div>
          </div>
        </div>

        <div className="col-md-6 p-0">
          <div className="right-div">
            <img
              src={pattern}
              alt="pattern-img"
              className="pattern-img w-100"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
