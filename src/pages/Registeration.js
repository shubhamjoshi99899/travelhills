import React from "react";
import { useState } from "react";
import './register.css';

import { useHistory } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";
function Signup() {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    console.log(e);

    name = e.target.name;
    value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();

    const { name, email, phone, work, password, cpassword } = user;

    const resp = await fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });

    const data = await resp.json();

    console.log(data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Registration");
      console.log("Invalid Registration");
    } else {
      window.alert("Registration Successful");
      console.log("registeration successful");

      history.push("/");
    }
  };
  return (
    <div>
      <Navbar/>
        <div className="register">
      <h1 className="text-center mt-4">Sign Up</h1>

      <div className="container">
        <form method="POST">
          <div class="form-group">
            <label for="exampleInputPassword1">Your Name</label>
            <input
              type="text"
              name="name"
              class="form-control"
              id="exampleInputPassword1"
              value={user.name}
              onChange={handleInputs}
              placeholder="Your Name"
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              name="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              value={user.email}
              onChange={handleInputs}
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Phone No.</label>
            <input
              type="text"
              name="phone"
              class="form-control"
              id="exampleInputPassword1"
              value={user.phone}
              onChange={handleInputs}
              placeholder="phone"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              name="password"
              id="exampleInputPassword1"
              value={user.password}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              class="form-control"
              id="exampleInputPassword1"
              value={user.cpassword}
              onChange={handleInputs}
              placeholder="Password"
            />
          </div>
          

          <div class="frame">
              <button class="custom-btn btn-3"><span>Register</span></button>
              </div>
        </form>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Signup;
