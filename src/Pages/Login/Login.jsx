import React, { useState } from "react";
import { Tabs } from "antd";
import RegisterComponent from "../../Components/Register/Register.jsx";
import LoginComponent from "../../Components/Login/Login.jsx";
import "./login.scss";
import LoginPlaceholder from "../../img/5500661.jpg"

const Login = () => {
  const [activeKey, setActiveKey] = useState("1");
  const onChange = (key) => {
    setActiveKey(key)
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
      children: <RegisterComponent setActiveKey={setActiveKey}/>,
    },
  ];
  return (
    <div className="login">
    <img className="loginimg" src={LoginPlaceholder} alt=""/>
      <div>
        <h1>Welcome Back!</h1>
        <Tabs activeKey={activeKey} items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default Login;
