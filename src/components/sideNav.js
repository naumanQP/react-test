import React from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import DashboardSidebar from "../components/sideNav";
import "../styles/styles.css";

const SideNav = (props) => {
  return (
    <>
      <div className="background-grey">
        <Container>
          <div className="profile-container">
            <img src="/assets/profile.png" />
            <p className="profile-text mt-10 mb-0">Admin One</p>
            <p className="profile-text-sm mt-05 mb-0">Centralin User</p>
          </div>

          <div className="nav-container">
            <Row style={{alignItems:"center"}} className="mt-40">
              <Col xs={2}>
                <img src="/assets/dashboard-icon.png" />
              </Col>
              <Col xs={7}>
                <p className="nav-text">Dashboard</p>
              </Col>
              <Col style={{textAlign:"end"}} xs={3}>
                <img src="/assets/arrow.png" />
              </Col>
            </Row>

            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2}>
                <img src="/assets/person.png" />
              </Col>
              <Col xs={10}>
                <p className="nav-text">Shared Links</p>
              </Col>
          
            </Row>

            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2}>
                <img src="/assets/prof.png" />
              </Col>
              <Col xs={10}>
                <p className="nav-text">Personal Links</p>
              </Col>
            
            </Row>

            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2} md={2}>
                <img src="/assets/graph.png" />
              </Col>
              <Col xs={7} md={7}>
                <p className="nav-text">Admin Groups</p>
              </Col>
              <Col style={{textAlign:"end"}} xs={3} md={3}>
                <img src="/assets/arrow.png" />
              </Col>
            </Row>

            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2}>
                <img src="/assets/dashboard-icon.png" />
              </Col>
              <Col xs={7}>
                <p className="nav-text">Smart Alert</p>
              </Col>
              <Col style={{textAlign:"end"}} xs={3}>
                <img src="/assets/count.png" />
              </Col>
            </Row>
            
            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2}>
                <img src="/assets/graph.png" />
              </Col>
              <Col xs={10}>
                <p className="nav-text">Trading Diary</p>
              </Col>
            
            </Row>
            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2}>
                <img src="/assets/1.png" />
              </Col>
              <Col xs={10}>
                <p className="nav-text">Co-Development</p>
              </Col>
            </Row>

            <hr style={{background:"#E8E8E8"}}></hr>

            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2}>
                <img src="/assets/headphone.png" />
              </Col>
              <Col xs={10}>
                <p className="nav-text">Support</p>
              </Col>
            </Row>

            <Row style={{alignItems:"center"}}  className="mt-40">
              <Col xs={2}>
                <img src="/assets/!.png" />
              </Col>
              <Col xs={10}>
                <p className="nav-text">Feedback</p>
              </Col>
            </Row>

            <div style={{textAlign:"center"}} className="social-links">
              <img style={{marginRight:"15px"}} src="assets/fb.png" />
              <img style={{marginRight:"15px"}} src="assets/direct.png" />
              <img src="assets/youtube.png" />
             
            </div>
            <div className="flex-center">
            <button style={{textAlign:"center"}} className="logout">
              
              </button>
            </div>
           
    </div>
        </Container>
      </div>
    </>
  );
};
//   const Dashboard = withRouter(Dash);
export default SideNav;
