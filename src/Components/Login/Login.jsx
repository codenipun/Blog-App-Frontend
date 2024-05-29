import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

import "./login.scss"

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState();

  const navigate = useNavigate();

  const { login, currentUser } = useContext(AuthContext);

  console.log(currentUser);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs);
      // await axios.post("/auth/login", inputs);
      navigate("/");
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
          <label for="floatingInput">Email / Username</label>
        </div>
        <div class="form-floating">
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
        <button className="btn btn-primary mt-3 w-100" onClick={handleSubmit}>Login</button>
        {err && <p className="mt-3" style={{color:'red'}}>{err}</p>}
      </form>
    </div>
  );
};

export default Login;
