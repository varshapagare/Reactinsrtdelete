import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet } from 'react-router-dom';


const Layout=()=>{
    return(
        <>
        <Navbar className='color' data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Curd</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to ="home">Home</Nav.Link>
            <Nav.Link as={Link} to="insert">Insert</Nav.Link>
            <Nav.Link as={Link} to="Display">Display</Nav.Link>
            <Nav.Link as={Link} to="Search">Search</Nav.Link>
            <Nav.Link as={Link} to="Update">Update</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
        <Outlet/>
      
        </>
    )
}
export default Layout;