import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/auth/register", inputs);
      navigate("/login");
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="auth">
      <form>
        <div class="form-floating mb-3">
          <input
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
            type="password"
            class="form-control"
            id="floatingPassword"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <label for="floatingPassword">Password</label>
        </div>
        <button className="btn btn-primary w-100" onClick={handleSubmit}>Register</button>
        {err && <p>{err}</p>}
      </form>
    </div>
  );
};

export default Register;
