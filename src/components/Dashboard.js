import '../App.css';
import Navbar from './Navbar';
import Jobs from './Jobs';
import Jobdetails from './Jobdetails';
import Network from './Network';
import Storage from './Storage';
import Linegraph from './Linegraph';
import Balance from './Balance';
import { Container, Row, Col } from 'react-bootstrap';
import { FaDesktop, FaHourglassHalf, FaThumbsUp, FaExclamationTriangle, FaEye } from 'react-icons/fa';


function Dashboard() {

    const jobData = [
        { icon: <FaDesktop />, label: 'RENDERING JOBS', count: 14 },
        { icon: <FaHourglassHalf />, label: 'WAITING JOBS', count: 14 },
        { icon: <FaThumbsUp />, label: 'COMPLETED JOBS', count: 14 },
        { icon: <FaExclamationTriangle />, label: 'FAILED JOBS', count: 14 },
    ]
        const jobDetailsData = [
            {
              "JOB ID": "1234567890",
              "PROJECT ID": "Pro_256",
              "STAGE": "Rendering",
              "SCENE/SHOT NAME": "KD1_00123_DPI_JK001_light...",
              "VIEW": <FaEye className='icon' />
            },
            {
              "JOB ID": "1234567890",
              "PROJECT ID": "Pro_256",
              "STAGE": "Uploading",
              "SCENE/SHOT NAME": "KD1_00123_DPI_JK001_light...",
              "VIEW": <FaEye className='icon' />
            },
            {
              "JOB ID": "1234567890",
              "PROJECT ID": "Pro_256",
              "STAGE": "Analysis",
              "SCENE/SHOT NAME": "KD1_00123_DPI_JK001_light...",
              "VIEW": <FaEye className='icon' />
            },
            {
              "JOB ID": "1234567890",
              "PROJECT ID": "Pro_256",
              "STAGE": "Uploading",
              "SCENE/SHOT NAME": "KD1_00123_DPI_JK001_light...",
              "VIEW": <FaEye className='icon' />
            },
            {
              "JOB ID": "1234567890",
              "PROJECT ID": "Pro_256",
              "STAGE": "Uploading",
              "SCENE/SHOT NAME": "KD1_00123_DPI_JK001_light...",
              "VIEW": <FaEye className='icon' />
            },
            {
              "JOB ID": "1234567890",
              "PROJECT ID": "Pro_256",
              "STAGE": "Uploading",
              "SCENE/SHOT NAME": "KD1_00123_DPI_JK001_light...",
              "VIEW": <FaEye className='icon' />
            }
          ]
    

    return (
        <Container fluid>
            <Row>
                <Col md={12} sm={12}>
                    <Navbar />
                </Col>
            </Row>


            <Row>
                <Col md={6}>
                    <Row>
                        <Col md={12}>
                            <Jobs title='Running Jobs' jobData={jobData} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                            <Jobs title='Running Frames' jobData={jobData} />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12}>
                        <Jobdetails title="Active Jobs" jobDetailsData={jobDetailsData} />
                        </Col>
                    </Row>
                </Col>

                <Col md={6}>
                    <Row>
                        <Col md={12}>
                            <Linegraph />
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                            <Balance />
                        </Col>
                        <Col md={6}>
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