// src/components/LoginForm.jsx
import React, { useState } from 'react';
// import ''
import './vendor/bootstrap/css/bootstrap.min.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/Linearicons-Free-v1.0.0/icon-font.min.css';
import './vendor/animate/animate.css';
import './vendor/css-hamburgers/hamburgers.min.css';
import './vendor/animsition/css/animsition.min.css';
import './vendor/select2/select2.min.css';
import './vendor/daterangepicker/daterangepicker.css';
import './css/util.css';
import './css/main.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    // TODO: wire up your login logic here
    console.log({ email, pass, rememberMe });
  };

  return (
    <div style={{ backgroundColor: '#666666' }}>
      <div className="limiter">
        <div className="container-login100">
          <div className="wrap-login100">
            <form className="login100-form validate-form" onSubmit={handleSubmit}>
              <span className="login100-form-title p-b-43">
                Login to continue
              </span>

              <div
                className="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <input
                  className="input100"
                  type="text"
                  name="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="label-input100">Email</span>
              </div>

              <div
                className="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <input
                  className="input100"
                  type="password"
                  name="pass"
                  value={pass}
                  onChange={e => setPass(e.target.value)}
                />
                <span className="focus-input100" />
                <span className="label-input100">Password</span>
              </div>

              <div className="flex-sb-m w-full p-t-3 p-b-32">
                <div className="contact100-form-checkbox">
                  <input
                    className="input-checkbox100"
                    id="ckb1"
                    type="checkbox"
                    name="remember-me"
                    checked={rememberMe}
                    onChange={e => setRememberMe(e.target.checked)}
                  />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>

                <div>
                  <a href="#" className="txt1">
                    Forgot Password?
                  </a>
                </div>
              </div>

              <div className="container-login100-form-btn">
                <button type="submit" className="login100-form-btn">
                  Login
                </button>
              </div>

              <div className="text-center p-t-46 p-b-20">
                <span className="txt2">or sign up using</span>
              </div>

              <div className="login100-form-social flex-c-m">
                <a href="#" className="login100-form-social-item flex-c-m bg1 m-r-5">
                  <i className="fa fa-facebook-f" aria-hidden="true" />
                </a>
                <a href="#" className="login100-form-social-item flex-c-m bg2 m-r-5">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </a>
              </div>
            </form>

            <div
              className="login100-more"
              style={{ backgroundImage: "url('images/bg-01.jpg')" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
