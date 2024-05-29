import React from "react";
import { Tabs } from "antd";
import RegisterComponent from "../../Components/Register/Register.jsx";
import LoginComponent from "../../Components/Login/Login.jsx";
import "./login.scss";
import LoginPlaceholder from "../../img/5500661.jpg"
const onChange = (key) => {
  console.log(key);
};

const items = [
  {
    key: "1",
    label: "Login",
    children: <LoginComponent />,
  },
  {
    key: "2",
    label: "Register",
    children: <RegisterComponent />,
  },
];
const Login = () => {
  return (
    <div className="login">
    <img className="loginimg" src={LoginPlaceholder} alt=""/>
      <div>
        <h1>Welcome Back!</h1>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Login;
