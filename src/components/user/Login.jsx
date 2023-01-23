import React, { useState, useEffect } from "react";
import "./user.css";
import Picture from "../../assets/login-bg.png";
import { Button, Checkbox, Form, Input } from "antd";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import Success from "../popmessages/Success";
import Error from "../popmessages/Error";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);

  // const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const user = {
      email,
      password,
    };
    try {
      const result = await (await axios.post("/api/users/login", user)).data;
      localStorage.setItem("currentUser", JSON.stringify(result.name));
      window.location.href = "/";
    } catch (error) {
      seterror(true);
      console.log(error);
    }

    // const response = await fetch("http://localhost:5000/api/users/login", {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(data)
    // });

    // if (response.status === 200) {
    //     return navigate("/dashboard.jsx");
    // } else {
    //     alert("Wrong credentials")
    // }
  };
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="hero1">
        <div data-aos="fade-left" className="inner-frm">
          <div className="input-frm">
            <h1 id="title_item">Welcome back</h1>
            <h3>
              Thank you for getting back, please login to your account by
              filling our form:
            </h3>
            <br />
            {error && <Error error="Invalid Credentials" />}
            {success && <Success success="User Login Successfull" />}
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
              id="formt"
            >
              <Form.Item
                id="col-label"
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                onChange={(e) => setEmail(e.target.value)}
              >
                <Input placeholder="Enter your email" />
              </Form.Item>

              <Form.Item
                id="col-label"
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                onChange={(e) => setPassword(e.target.value)}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              <div className="btns1">
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  wrapperCol={{
                    offset: 2,
                    span: 20,
                  }}
                >
                  <Checkbox>Remember</Checkbox>
                </Form.Item>

                <span>Forgot Password?</span>
              </div>

              <div className="btns">
                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    onClick={handleLogin}
                  >
                    Log In
                  </Button>
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 12 }}>
                  <Button ghost>
                    <Link id="gotosign" to={"/signup.jsx"}>
                      Sign Up
                    </Link>
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
          <img src={Picture} id="logpic" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Login;
