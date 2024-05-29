import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col md={3} sm={2} className="d-none d-sm-block">
          <Sidebar />
        </Col>
        <Col md={9} sm={10} xs={12}>
          <Dashboard />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
