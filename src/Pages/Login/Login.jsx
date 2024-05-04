import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/authContext";

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });

  const [err, setErr] = useState();

  const navigate = useNavigate();

  const {login, currentUser} = useContext(AuthContext);

  console.log(currentUser);

  const handleChange = (e) => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  useEffect(()=>{
    if(currentUser){
      navigate("/");
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(inputs)
      // await axios.post("/auth/login", inputs);
      navigate("/");
    } catch (error) {
      setErr(error.response.data);
    }
  };
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" name="username" onChange={handleChange} />
        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
        <button onClick={handleSubmit}>Login</button>
        {err && <p>{err}</p>}
        <span>
          Don't you have an account? <Link to="/register">Register</Link>
        </span>
      </form>
    </div>
  );
};

export default Login;
