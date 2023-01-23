import React, { useState } from "react";
import "./booking.css";
import Navbar from "../index/Navbar";
import { Button } from "react-bootstrap";
import Footer from "../index/Footer";
import GotoUp from "../index/GotoUp";

const Booking = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    checkindate: "",
    checkoutdate: "",
    mobilenumber: "",
    guestCount: "",
    roomType: "",
  });
  const submitHandler = (event) => {
    event.preventDefault();
    alert("Registered Successfully!!");
    console.log(formData);
  };

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="booking-main">
      <Navbar />
      <h1 className="booking">BOOKING</h1>
      <div className="formmaincontainer">
        <div className="forminnerContainer">
          <form onSubmit={submitHandler}>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              Choose Date
            </p>
            <div className="cincout">
              <div>
                <label>Check-in</label>
                <input
                  className="address-in"
                  type="date"
                  name="checkindate"
                  value={formData.checkindate}
                  onChange={formHandler}
                  required
                />
              </div>

              <div>
                <label>Check-out</label>
                <input
                  className="address-in"
                  type="date"
                  name="checkoutdate"
                  value={formData.checkoutdate}
                  onChange={formHandler}
                  required
                />
              </div>
            </div>

            <div className="test">
              <div>
                <label>Person</label>
                <input
                  className="test-in"
                  value={formData.guestCount}
                  onChange={formHandler}
                  type="Number"
                  name="guestCount"
                  placeholder="0"
                  required
                />
              </div>

              <div>
                {" "}
                <label>Room</label>
                <input
                  className="test-in"
                  value={formData.roomCount}
                  onChange={formHandler}
                  type="Number"
                  name="roomCount"
                  placeholder="0"
                  required
                />
              </div>
            </div>

            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "30px",
              }}
            >
              Select Room
            </p>

            <select
              className="room"
              name="roomType"
              value={formData.roomType}
              onChange={formHandler}
              required
            >
              <option value="Standard Room">Standard Room</option>
              <option value="2-Bed Room">2-Bed Room</option>
              <option value="Deluxe Room">Deluxe Room</option>
              <option value="king Room">King Room</option>
              <option value="Queen Room">Queen Room</option>
              <option value="Suite Room">Suite Room</option>
            </select>
            <p
              style={{
                textAlign: "left",
                fontSize: "20px",
                fontWeight: "bold",
                marginTop: "20px",
              }}
            >
              Enter your details
            </p>

            <div className="main-cont">
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  flexDirection: "column",
                  textAlign: "left",
                }}
              >
                <label>Full Name</label>
                <input
                  className="FName"
                  value={formData.fullName}
                  onChange={formHandler}
                  type="text"
                  name="fullName"
                  placeholder="Full Name"
                  required
                />
                <label>Email Address</label>
                <input
                  className="FName"
                  value={formData.email}
                  onChange={formHandler}
                  type="email"
                  name="email"
                  placeholder="example@gmail.com"
                  required
                />
              </div>

              <div style={{ width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-end', justifyContent: 'space-between'}}>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "13px",
                    marginTop: "20px",
                  }}
                >
                  List of Mode Payments
                </p>
                <p
                  style={{
                    textAlign: "left",
                    fontSize: "20px",
                    fontWeight: "bold",
                    marginTop: "20px",
                  }}
                >
                  Total: P1500
                </p>
              </div>
            </div>

            <Button
              variant="secondary"
              className="mr-2 submitButton"
              type="submit form"
              value="Submit Form"
            >
              Submit Form
            </Button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Booking;
