import React, { useState } from "react";
import axios from "axios";
import { Button, Form, Input, message } from "antd";
import Loader from "../Loader/Loader";

const Register = () => {
  const [err, setErr] = useState();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    try {
      await axios.post("/auth/register", values);
      window.location.reload();
      message.success("Registration Successfull");
    } catch (error) {
      setErr(error.response.data);
      message.error(error.response.data);
    }
    setLoading(false);
  };
  return loading ? (
    <Loader length={"40vh"} />
  ) : (
    <Form
      name="normal_login"
      className="login-form"
      layout="vertical"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: "Please input your Username!",
          },
        ]}
      >
        <Input placeholder="Username" />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please enter a valid Email!",
          },
        ]}
      >
        <Input placeholder="Email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your Password!",
          },
        ]}
      >
        <Input.Password placeholder="Password" />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
