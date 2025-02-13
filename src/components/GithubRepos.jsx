import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Row, Col, Container } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import "../assets/github.css"; // Custom styles

const GitHubRepos = () => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/techpraveen/repos")
      .then((response) => setRepos(response.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <Container className="github-container">
      <h2 className="text-center my-4">GitHub Repositories</h2>
      <Row className="justify-content-center">
        {repos.map((repo) => (
          <Col key={repo.id} lg={4} md={6} sm={12} className="mb-4">
            <Card className="repo-card">
              <Card.Body>
                <Card.Title>
                  <FaGithub className="icon" /> {repo.name}
                </Card.Title>
                <Card.Text>
                  {repo.description
                    ? repo.description
                    : "No description available."}
                </Card.Text>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark"
                >
                  View on GitHub
                </a>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default GitHubRepos;
