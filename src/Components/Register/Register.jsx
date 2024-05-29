import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { message } from "antd";

const Register = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (inputs.username === "") {
      message.warning("Username is required!");
    } else if (inputs.email === "") {
      message.warning("Email is required!");
    } else if(!validateEmail(inputs.email)){
      message.warning("Please enter correct email")
    } else if (inputs.password === "") {
      message.warning("Password cannot be empty!");
    } else {
      try {
        await axios.post("/auth/register", inputs);
        // navigate("/login");
        message.success("Registration Successfull");
      } catch (error) {
        setErr(error.response.data);
        message.error(error.response.data);
      }
    }
  };
  return (
    <div className="auth">
      <form>
        <div class="form-floating mb-3">
          <input
            required
            type="text"
            class="form-control"
            id="floatingInput"
            placeholder="Username"
            name="username"
            onChange={handleChange}
          />
          <label for="floatingInput">Username</label>
        </div>
        <div class="form-floating mb-3">
          <input
            required
            type="email"
            class="form-control"
            id="floatingPassword"
            placeholder="Email"
            name="email"
            onChange={handleChange}
          />
          <label for="floatingPassword">Email</label>
        </div>
        <div class="form-floating mb-3">
          <input
            required
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
