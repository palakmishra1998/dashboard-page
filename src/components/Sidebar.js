import React from "react";
import { Container, Navbar } from 'react-bootstrap';
function Sidebar() {
    return (
        //<h1>Sidebar</h1>
        <>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            //src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        //alt="React Bootstrap logo"
                        />{' '}
                        Dashboard
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            //src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        //alt="React Bootstrap logo"
                        />{' '}
                        Assets
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            //src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        //alt="React Bootstrap logo"
                        />{' '}
                        Analysis
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            //alt=""
                            //src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        />{' '}
                        Jobs
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            //src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        //alt="React Bootstrap logo"
                        />{' '}
                        Reports
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <Navbar className="bg-body-tertiary">
                <Container>
                    <Navbar.Brand href="#home">
                        <img
                            //src="/img/logo.svg"
                            width="30"
                            height="30"
                            className="d-inline-block align-top"
                        //alt="React Bootstrap logo"
                        />{' '}
                        Transfers
                    </Navbar.Brand>
                </Container>
            </Navbar>
            <br />
            <br />
        </>
    )
}

export default Sidebar;