import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import DashboardSidebar from "../components/sideNav";
import "../styles/styles.css";

const ProgressBar = (props) => {
  return <>
  <Container > 

      <div className="padding-20">
      <h1 className="main-heading">Profile</h1>

      <div className="progress-container">
          <p className="progress-tab" >
              Personal Information
          </p>
          <div>
          <p className="progress-tab" >
              Sign In & Security
          </p>
          <div className="border-end"></div>
          </div>
         
          <p className="progress-tab" >
              Connect & View Social Media Information
          </p>
          <p className="progress-tab" >
              Personalization
          </p>
          <p className="progress-tab" >
              Centralin Points
          </p>

      </div>

      </div>

      
  </Container>

  </>;
};

export default ProgressBar;
