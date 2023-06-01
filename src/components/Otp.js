import React, {useState} from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import UserPool from '../UserPool';
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import { NavLink,useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";

const Otp = () => {
	const navigate = useNavigate();

	const [OTP, setOTP] = useState('');
	const [email, setEmail] = useState('');
 
   const [showLink, setShowLink] = useState(false);

  const verifyAccount = async (event) => {
	  event.preventDefault();
 

	  const user = new CognitoUser({
	  	Username: localStorage.getItem("username"),
	  	Pool: UserPool,
	  });


	  user.confirmRegistration(OTP, true, (err, data) => {
	  	if (err) {
        Swal.fire({
          title: "Warning",
          text: err,
          icon: "warning",
          confirmButtonText: "OK",
        });
        setShowLink(true)
      } else {
      	Swal.fire({
          title: "Success",
          text: "Account Verified Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
        setShowLink(false)
        navigate("/")
      }
	  })
    
	};

	const resendConfirmationCode = () => {
	  const userData = {
	  	Username:localStorage.getItem("username"),
	    Pool: UserPool
	  };

	  const cognitoUser = new CognitoUser(userData);

	  cognitoUser.resendConfirmationCode((err, result) => {
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
          text: "Confirmation Code resend to your email",
          icon: "success",
          confirmButtonText: "OK",
        });
	    }
	  });
	};

  return(
    <>
			<div className="container mt-3">
		    <section className="d-flex justify-content-between">
		      <div className="right-data mt-5" style={{ width: "100%" }}>
		        <div className="sign_img mt-3">
		          <img src="./sign.svg" style={{ maxWidth: 600 }} alt=""/>
		        </div>
		      </div>
		      <div className="right-data mt-3 col-lg-6" style={{marginLeft:"20%"}}>
		        <br/>
		        <h3 className="mb-3 text-center col-lg-6">Verify Email</h3>
		        <Form>
		          <Form.Group className="mb-4 col-lg-6" controlId="email">
				        <Form.Control type="email" name="email" onChange={(e) => setOTP(e.target.value)} placeholder="Enter your email" />
				       
				      </Form.Group>
				      <Form.Group className="mb-4 col-lg-6" controlId="email">
				        <Form.Control type="number" name="otp" onChange={(e) => setOTP(e.target.value)} value={OTP} placeholder="Enter otp sent your email" />
				       
				      </Form.Group>

				     
				      <Button variant="primary" className="col-lg-6" onClick= {verifyAccount} type="submit">
				        Submit
				      </Button>
				    </Form>
				    <p className="mt-3">Don't have an Account <span> <NavLink to="/signup"> Sign Up</NavLink></span></p>
				    {showLink && <p className="mt-3" ><span onClick= {resendConfirmationCode}> Resend Code</span></p>}
		      </div>
		      
		    </section>
		  </div>
		</>
	)  

};

export default Otp;