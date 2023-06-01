import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserPool from '../UserPool';
import { CognitoUserAttribute } from 'amazon-cognito-identity-js';
import { NavLink, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Signup = () => {
	const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

	const handleSubmit = async (event) => {
	  event.preventDefault();

    const attributeList = [
		    new CognitoUserAttribute({ Name: 'email', Value: email }),
		    new CognitoUserAttribute({ Name: 'name', Value: name }),
		];
    
    const username = email; 

    UserPool.signUp(username, password, attributeList, null, (err, data) => {
      if (err) {
        Swal.fire({
          title: "Warning",
          text: err,
          icon: "warning",
          confirmButtonText: "OK",
        });
      } else {
      	Swal.fire({
          title: "Success",
          text: "Signup successful! Please check your email for the confirmation code",
          icon: "success",
          confirmButtonText: "OK",
        });
        navigate("/verification")
        localStorage.setItem("username",data.userSub)
        console.log(data)
      }
    });
	};


  return(
    <>
			<div className="container mt-3">
		    <section className="d-flex justify-content-between">
		      <div className="left-data mt-3" style={{width: "100%"}}>
		        <br/>
		        <h3 className="mb-3 text-center col-lg-6">Sign Up</h3>
		        <Form>
		          <Form.Group className="mb-4 col-lg-6" controlId="name">
				        <Form.Control type="text" name="name" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
				       
				      </Form.Group>

				      <Form.Group className="mb-4 col-lg-6" controlId="email">
				        <Form.Control type="email" name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
				       
				      </Form.Group>

				      <Form.Group className="mb-4 col-lg-6" controlId="password">
				        <Form.Control type="password" name="password" onChange={(e) => setPassword
				        (e.target.value)} placeholder="Enter Your Password" />
				      </Form.Group>
				      
				      <Button variant="primary" className="col-lg-6" onClick= {handleSubmit} type="submit">
				        Submit
				      </Button>
				    </Form>
				    <p className="mt-3">Already Have an Account <span> <NavLink to="/">Sign In</NavLink></span></p>
		      </div>
		      <div className="right-data mt-5" style={{ width: "100%" }}>
		        <div className="sign_img mt-3">
		          <img src="./sign.svg" style={{ maxWidth: 600 }} alt=""/>
		        </div>
		      </div>
		    </section>
		  </div>
		</>
	)  

};

export default Signup;