import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { withRouter } from "react-router";
import DashboardSidebar from "../components/sideNav";
import "../styles/styles.css";

const Account = (props) => {

    const [accounts, setAccounts] = useState([
        {
            date:'22-02-2022',
            time:'10:00 PM',
            ip:"192.162.20.22",
            mode:"Success at first attempt",
            action:"Login"

        },
        {
            date:'22-02-2022',
            time:'08:32 AM',
            ip:"192.162.20.22",
            mode:"Disconnection",
            action:"Login"

        },
        {
            date:'22-02-2022',
            time:'09:23 PM',
            ip:"192.162.20.22",
            mode:"Success at first attempt",
            action:"login"

        }
    ])

  return <>
  <Container > 

      <p>Account Activity</p>

      <Row className="table-heading">
          <Col xs={2}>
              Date
          </Col>
          <Col xs={2}>
              Time
          </Col>
          <Col xs={2}>
              IP ADDRESS
          </Col>
          <Col xs={4}>
              CHANGE MODE
          </Col>
          <Col xs={2}>
              Action
          </Col>
      </Row>

      <Row className="table-hr">
          {accounts.map(value => (
            <>
          <Col xs={2}>
              <p className="hr-black">
              {value.date}
              </p>
          </Col>
          <Col xs={2}>
              <p className="hr-blue">
              {value.time}

              </p>
          </Col>
          <Col  xs={2}>
              <p className="hr-black" >
              {value.ip}

              </p>
          </Col>
          <Col xs={4}>
              <p className={value.mode=="Disconnection" ? "hr-red" : "hr-green"}>
              {value.mode}

              </p>
          </Col>
          <Col xs={2}>
              <p className="hr-blue">
              {value.action}
              </p>
          </Col>
          <hr style={{marginTop:'10px'}} />
          </>
          ))}
          
      </Row>


  </Container>

  </>;
};

export default Account;
