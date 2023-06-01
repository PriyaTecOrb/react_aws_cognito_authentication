import React, {useContext,useEffect,useState} from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {AuthContext} from "./Auth";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const [status, setStatus] = useState(false);

  const {getSession} = useContext(AuthContext);

  useEffect(() => {
    getSession().then((session) => {
      console.log(session)
      setStatus(true)
    });
  },[]);


  if (!status)
  {
    return(
      <>
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav.Link href="/"><img src="./download.jpeg" style={{ maxWidth: 40 }} alt=""/></Nav.Link>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/signup">Sign Up</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      </>
    ) 
  }
  else{
    return(
      <>
        <Navbar expand="lg" bg="dark" variant="dark">
        <Container>
          <Nav.Link href="/"><img src="./download.jpeg" style={{ maxWidth: 40 }} alt=""/></Nav.Link>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/products">User Products</Nav.Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> 
      </>
    ) 
  }
}

export default Header