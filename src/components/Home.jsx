import React from "react";
import "../assets/styles.css"; // Custom styles
import { Card, Container, Row, Col } from "react-bootstrap";
import profilePic from "../assets/praveen.jpg"; // Make sure your photo is in the assets folder

const Home = () => {
  return (
    <Container className="home-container">
      <h1 className="text-center my-4 animate__animated animate__fadeInDown">Welcome to My Portfolio</h1>

      {/* Profile Section */}
      <Row className="justify-content-center">
        <Col md={4} sm={8} xs={10}>
          <Card className="profile-card animate__animated animate__fadeIn">
            <div className="profile-img-container">
              <Card.Img variant="top" src={profilePic} className="profile-pic" />
            </div>
            <Card.Body>
              <Card.Title className="text-center">Praveen Kumar Pandey</Card.Title>
              <Card.Text className="text-center">
                📧 <a href="mailto:praveenkumarpandeyup@gmail.com" className="text-decoration-none">praveenkumarpandeyup@gmail.com</a> <br />
                📞 +91 7355928695 <br />
                🔗 <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-decoration-none">LinkedIn</a> |{" "}
                <a href="https://github.com/techpraveen" target="_blank" rel="noopener noreferrer" className="text-decoration-none">GitHub</a>
              </Card.Text>
            </Card.Body>
            <button className="btn btn-danger"><a href="#">Dwonload Resume</a></button>

          </Card>
        </Col>
      </Row>

      {/* Education & Skills */}
      <Row className="justify-content-center mt-4">
        <Col md={5} className="mb-4">
          <Card className="info-card animate__animated animate__fadeInLeft">
            <Card.Body>
              <Card.Title>🎓 Education</Card.Title>
              <Card.Text>
                <strong>B.Tech in Information Technology (2020-2024)</strong> <br />
                Chaudhary Charan Singh University, Meerut | CGPA: 7.9/10 <br />
                <strong>12th - Aatmdeep Vidyalaya, Gorakhpur</strong> | 84.6% <br />
                <strong>10th - Aatmdeep Vidyalaya, Gorakhpur</strong> | 81.8%
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} className="mb-4">
          <Card className="info-card animate__animated animate__fadeInRight">
            <Card.Body>
              <Card.Title>💻 Technical Skills</Card.Title>
              <Card.Text>
                <strong>Languages:</strong> Java, JavaScript <br />
                <strong>Frontend:</strong> React.js, HTML, CSS, Bootstrap <br />
                <strong>Backend:</strong> Spring Boot, JPA, Hibernate <br />
                <strong>Databases:</strong> SQL, MongoDB <br />
                <strong>Tools:</strong> Postman, Eclipse, VS Code, GitHub
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Projects & Interests */}
      <Row className="justify-content-center mt-4">
        <Col md={5} className="mb-4">
          <Card className="info-card animate__animated animate__fadeInLeft">
            <Card.Body>
              <Card.Title>🚀 Projects</Card.Title>
              <Card.Text>
                <strong>Product Management System:</strong> React, Spring Boot, Bootstrap, MySQL, Hibernate <br />
                <strong>MERN Stack Blog:</strong> MongoDB, Express.js, React, Node.js, JWT, Tailwind CSS
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col md={5} className="mb-4">
          <Card className="info-card animate__animated animate__fadeInRight">
            <Card.Body>
              <Card.Title>🎨 Hobbies & Interests</Card.Title>
              <Card.Text>
                🎥 Video Editing <br />
                📷 Photography <br />
                🎬 YouTube Content Creation <br />
                🚀 Hard Working & Tech Enthusiast
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;