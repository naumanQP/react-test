import React,{useState} from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import DashboardSidebar from "../components/sideNav";
import "../styles/styles.css";
import TextField from "@mui/material/TextField";


const FormComp = (props) => {
    const [email,setEmail] = useState("naumashk4@gmail.com");
    const [confirmEmail,setConfirmtEmail] = useState("naumanshk4@gmail.com");
    const [password,setPassword] = useState("nauman123");
    const [oldPassword,setOldPassword] = useState("nauman2111");
    const [confirmPassword,setConfirmPassword] = useState("nauman123");
    // const [confirmEmail,seConfirmtEmail] = useState("");
  return (
    <>
      <Container>
        <Row className="padding-20 ">
          <Col lg={4} md={4} xxl={4} xs={12}>
            <p className="form-text"> Sign In</p>
          </Col>
          <Col lg={8} md={8} xxl={8} xs={12}>
            <div> 
                <div>
                <TextField
           
                className="single-input"
                id="filled-basic"
                label="Email Address"
                variant="filled"
                style={{ width: "100%"}}
                type="text"
                InputProps={{
                  className: "user-input-card- text-blue",
                }}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
                </div>
              <div className="mt-20">
              <TextField
                
                className="single-input"
                id="filled-basic"
                label="Confirm Email Address"
                variant="filled"
                style={{ width: "100%" }}
                type="text"
                InputProps={{
                  className: "user-input-card- text-blue",
                }}
                value={confirmEmail}
                onChange={(e) => {
                    setConfirmtEmail(e.target.value)
                  }}
              />
              </div>
              
            </div>
          </Col>
        </Row>
        <hr></hr>

        <Row className="padding-20 mt-60">
          <Col lg={4} md={4} xxl={4} xs={12}>
            <p className="form-text"> Security Information</p>
          </Col>
          <Col lg={8} md={8} xxl={8} xs={12}>
            <div> 
                <div className="flex-center">
                <TextField
           
                className="single-input"
                id="filled-basic"
                label="Old Password"
                variant="filled"
                style={{ width: "100%" }}
                type="password"
                InputProps={{
                  className: "user-input-card-",
                }}
                value={oldPassword}
                onChange={(e) => {
                  setOldPassword(e.target.value)
                }}
              />
              <p className="edit-text">Edit</p>
                </div>
              <div className="mt-20 flex-center">
              <TextField
                
                className="single-input"
                id="filled-basic"
                label="New Password"
                variant="filled"
                style={{ width: "100%" }}
                type="password"
                InputProps={{
                  className: "user-input-card-",
                }}
                value={password}
                onChange={(e) => {
                 setPassword(e.target.value)
                }}
              />
               <p className="edit-text">Edit</p>
              </div>
              
              <div className="mt-20 flex-center">
              <TextField
                
                className="single-input"
                id="filled-basic"
                label="Confirm New Password"
                variant="filled"
                style={{ width: "100%" }}
                type="password"
                InputProps={{
                  className: "user-input-card-",
                }}
                value={confirmPassword}
                onChange={(e) => {
                  setConfirmPassword(e.target.value)
                }}
              />
               <p className="edit-text">Edit</p>
              </div>
            </div>
          </Col>
        </Row>
        <hr></hr>
      </Container>
    </>
  );
};

export default FormComp;
