import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { FaCode, FaDatabase, FaReact, FaNodeJs, FaJava, FaLeaf, FaGithub } from "react-icons/fa"; // Replaced FaSpring with FaLeaf
import "../assets/styles.css"; // Custom styles
import profilePic from "../assets/praveen.jpg"; // Make sure your photo is in the assets folder


const About = () => {
  return (
    <Container className="about-container">
      <Row className="justify-content-center">
        {/* Profile Card */}
        <Col lg={6} md={8} sm={12}>
          <Card className="profile-card text-center">
            {/* <div className="profile-img-container">
              <img src={profilePic} alt="Praveen" className="profile-pic" />
            </div> */}
            <Card.Body>
              <Card.Title className="mb-3"><h1>I am Praveen</h1> </Card.Title>
              <Card.Text>
                I am a Backend Developer passionate about building scalable applications.
                Experienced in Spring Boot, Node.js, React, and SQL.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Skills Section */}
      <h2 className="text-center my-4 mt-3">My Skills</h2>
      <Row className="justify-content-center">
        <Col md={8} sm={12}>
          <div className="skills">
            <Badge bg="primary"><FaJava /> Java</Badge>
            <Badge bg="success"><FaLeaf /> Spring Boot</Badge> {/* Fixed Icon */}
            <Badge bg="dark"><FaNodeJs /> Node.js</Badge>
            <Badge bg="info"><FaReact /> React</Badge>
            <Badge bg="secondary"><FaDatabase /> MySQL</Badge>
            <Badge bg="light text-dark"><FaGithub /> GitHub</Badge>
          </div>
        </Col>
      </Row>

      {/* Experience & Projects */}
      <h2 className="text-center my-4 mt-3">Experience & Projects</h2>
      <Row>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>CDAC Advanced Computing</Card.Title>
              <Card.Text>
                Currently pursuing **Diploma in Advanced Computing** from CDAC Bangalore.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6}>
          <Card className="info-card">
            <Card.Body>
              <Card.Title>Learning Management System (LMS)</Card.Title>
              <Card.Text>
                Built a **full-stack LMS** using **Spring Boot, React, MySQL** with **Admin & User roles**.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
