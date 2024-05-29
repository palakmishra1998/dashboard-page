import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
//import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar() {
    return(
        //<h1 className="outline">Jobs</h1>
        <Container>
            <NavDropdown title="Default Project" id="navbarScrollingDropdown"></NavDropdown>
        
            <NavDropdown title="Daren Joe" id="navbarScrollingDropdown"></NavDropdown>
        </Container>
        
    )
}

export default Navbar;