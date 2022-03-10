import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import Account from "../components/account";
import FormComp from "../components/inputForm";
import ProgressBar from "../components/progressBar";
import SideNav from "../components/sideNav";
import TopBar from "../components/topBar";
import "../styles/styles.css";

const Dashboard = (props) => {
  return (
    <>
      <div style={{ overflowX: "hidden" }}>
        <Row>
          <Col lg={2} md={4} lg={4} xxl={2}>
            <SideNav />
          </Col>
          <Col style={{ marginLeft: "-25px" }} lg={10} md={8} lg={8} xxl={10}>
            <TopBar />
            <div style={{ paddingLeft: 60, paddingRight: 60 }}>
              <ProgressBar />
              <FormComp />
              <Account />
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};
//   const Dashboard = withRouter(Dash);
export default Dashboard;
