import '../App.css';
import Navbar from './Navbar';
import Jobs from './Jobs';
import Jobdetails from './Jobdetails';
import Network from './Network';
import Storage from './Storage';
import Linegraph from './Linegraph';
import Balance from './Balance';
import { Container, Row, Col } from 'react-bootstrap';

function Dashboard() {
    return (
        <Container fluid>
            <Row>
                <Col md={12} sm={12}>
                    <Navbar />
                </Col>
            </Row>


            <Row>
                <Col>
                    <Row>
                        <Col md={7}>
                            <Jobs title= 'Running Jobs' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7}>
                            <Jobs name = 'Running Frames' />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={7}>
                            <Jobdetails />
                        </Col>
                    </Row>
                </Col>

                <Col>
                    <Row>
                        <Col md={5}>
                            <Linegraph />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={5}>
                            <Balance />
                        </Col>
                        <Col md={5}>
                            <Storage />
                        </Col>
                    </Row>
                </Col>
            </Row>

            <Row>
                <Col md={12}>
                    <Network />
                </Col>
            </Row>

        </Container >
    )
}

export default Dashboard;