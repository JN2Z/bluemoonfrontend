import React, { useState, useEffect } from "react";
import "./user.css";
import Picture2 from "../../assets/signup-bg.png";
import { Form, Input, Button } from "antd";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import Success from "../popmessages/Success";
import Error from "../popmessages/Error";

const Signup = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [contact, setcontact] = useState("");
  const [password, setpassword] = useState("");
  const [error, seterror] = useState(false);
  const [success, setsuccess] = useState(false);
  async function register() {
    if(!name || !email || !contact || !password){
        seterror(true)
        setTimeout(() => {
            seterror('')
        }, 5000);
        
    }else{
        const user = {
            name,
            contact,
            email,
            password,
          };
      
          try {
            const result = await axios.post("/api/users/register", user);
            // console.log(result)
            alert('Successfully Registered!')
            window.location.href = "/login.jsx";
          } catch (error) {
            seterror(true);
            console.log(error);
          }
        }
    }
   
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div className="hero2">
        <div data-aos="fade-left" className="inner-frm">
          <div className="input-frm">
            <h1>Create your Account</h1>
            <br />
            <br />
            {success && <Success success="User Registered Successfully" />}
            {error && <Error error="Please fill up form correctly" />}
            <Form
              name="basic"
              labelCol={{ span: 5 }}
              wrapperCol={{ span: 18 }}
              initialValues={{ remember: true }}
              autoComplete="off"
              id="formt"
            >
              <Form.Item
                id="col-label"
                label="Full Name"
                name="Full name"
                rules={[
                  { required: true, message: "Please input your full name!" },
                ]}
                onChange={(e) => setname(e.target.value)}
              >
                <Input />
              </Form.Item>

              <Form.Item
                id="col-label"
                label="Contact"
                name="number"
                rules={[
                  {
                    required: true,
                    message: "Please input your contact number!",
                  },
                ]}
                onChange={(e) => setcontact(e.target.value)}
              >
                <Input />
              </Form.Item>

              <Form.Item
                id="col-label"
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                onChange={(e) => setemail(e.target.value)}
              >
                <Input />
              </Form.Item>
              <Form.Item
                id="col-label"
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                onChange={(e) => setpassword(e.target.value)}
              >
                <Input.Password />
              </Form.Item>
              <p>
                Aready have an account?{" "}
                <Link id="gotosign" to="/login.jsx">
                  Log in
                </Link>
              </p>
              <br />

              <Form.Item wrapperCol={{ offset: 1, span: 12 }}>
                <Button type="primary" htmlType="submit" onClick={register}>
                  Sign Up
                </Button>
              </Form.Item>
            </Form>
          </div>
          <img src={Picture2} id="logpic" alt="img" />
        </div>
      </div>
    </>
  );
};

export default Signup;
