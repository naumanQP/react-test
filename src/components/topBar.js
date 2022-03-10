import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import DashboardSidebar from "../components/sideNav";
import "../styles/styles.css";

const TopBar = (props) => {
  return (
    <>
      <div style={{ marginTop: 20 , marginLeft:20}}>
        <Row>
          <Col xs={12} xxl={6} md={6} lg={6}>
            <p className="welcome-text mt-10 m-0"> Welcome to Centralin!</p>
          </Col>
          <Col xs={12} xxl={6} md={6} lg={6}>
            <p  className="welcome-text mt-10 m-0 text-end">
              {" "}
             <img src='/assets/right1.svg' />
             <img src='/assets/right2.svg' />
            </p>
          </Col>
        </Row>
      </div>
      <hr></hr>
    </>
  );
};

export default TopBar;
