import React from 'react'
import '../auth/Login.css'
import String from '../../utils/String'
import login_footer from '../../assets/images/rafiki.svg'
import pattern from '../../assets/images/pattern.svg'
// import Button from 'react-bootstrap/Button'
// import Form from 'react-bootstrap/Form'
const Login = () => {
  return (
    <div className="container">
      <div className="row">
        {/*Login Page first half column started*/}
        <div className="col-md-6">
          <h1 className="welcome-immence">Welcome, immencer!</h1>
          <p className="signing-to-continue">{String.signin_to_continue}</p>

          {/* <Form className="login-form">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Email Address <span className="error">*</span>
              </Form.Label>
              <Form.Control type="email" placeholder="Enter Your Email" hi />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                Password <span className="error">*</span>
              </Form.Label>
              <Form.Control type="password" placeholder="Enter Your Password" />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Sign In
            </Button>
          </Form> */}
          {/* form div start */}
          <div className="Auth-form-container">
            <form className="Auth-form">
              {/* <div className="Auth-form-content"> */}
              {/* <h3 className="Auth-form-title">Sign In</h3> */}
              <div className="form-group mt-3">
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
                <input
                  type="password"
                  className="form-control mt-1"
                  placeholder="Enter Your Password"
                />
              </div>
              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Sign In
                </button>
              </div>
              {/* </div> */}
            </form>
          </div>
          {/* form div end */}
          <div className="login-footer">
            <img
              src={login_footer}
              alt="Your SVG"
              className="login-footer-img"
            />
          </div>
        </div>
        {/* Login Page second half column started */}
        <div className="col-md-6">
          <div className="login-pattern">
            <img
              src={pattern}
              alt="Login_pattern"
              className="login-pattern-img"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
