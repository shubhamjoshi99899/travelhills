import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";
import './login.css';
function Login() {
  return (
    <div>
        <Navbar/>
        <div className="login">
      <h1 className="text-center mt-4">Log in</h1>

      <div className="container">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>

          <div class="frame">
              <button class="custom-btn btn-3"><span>Login</span></button>
              </div>
        </form>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Login;
    