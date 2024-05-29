import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import NotFound from './components/NotFound';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Container fluid>
          <Row>
            <Col md={2} sm={2} className="d-none d-sm-block sidebar-container">
              <Sidebar />
            </Col>
            <Col md={10} sm={10} xs={12}>
              <Routes>
                <Route path='/' element={<Dashboard />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/assets' element={<NotFound />} />
                <Route path='/analysis' element={<NotFound />} />
                <Route path='/jobs' element={<NotFound />} />
                <Route path='/reports' element={<NotFound />} />
                <Route path='/transfers' element={<NotFound />} />
                <Route path='/projects' element={<NotFound />} />
                <Route path='/settings' element={<NotFound />} />
                <Route path='/support' element={<NotFound />} />
                <Route path='/feedback' element={<NotFound />} />
                <Route path='/raise-ticket' element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </BrowserRouter>
    </div>
  );
}

export default App;
