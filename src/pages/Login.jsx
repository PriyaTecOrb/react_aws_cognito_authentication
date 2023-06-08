import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../components/Auth";
import FormGroup from "../components/FormGroup";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { authenticate } = useContext(AuthContext);

  const handleLogin = async (event) => {
    event.preventDefault();

    authenticate(email, password)
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        const error = err.split(":")[1];
        if (error == "User is not confirmed.") {
          console.log(err);
        }
        navigate("/verification");
      });
  };

  return (
    <>
      <div className="container mt-3">
        <section className="d-flex justify-content-between">
          <div className="right-data mt-5">
            <div className="sign_img mt-3">
              <img src="./sign.svg" style={{ maxWidth: 600 }} alt="" />
            </div>
          </div>

          <div
            className="right-data mt-3 col-lg-6"
            style={{ marginLeft: "20%" }}
          >
            <br />
            <h3 className="mb-3 text-center col-lg-6">Sign In</h3>
            <Form>
              <FormGroup
                type="email"
                name="email"
                onChange={setEmail}
                placeholder="Enter Your Email"
              />
              <FormGroup
                type="password"
                name="password"
                onChange={setPassword}
                placeholder="Enter Your Password"
              />

              <Button
                variant="primary"
                className="col-lg-6"
                onClick={handleLogin}
                type="submit"
              >
                Submit
              </Button>
            </Form>
            <p className="mt-3">
              Don't have an Account{" "}
              <span>
                {" "}
                <NavLink to="/signup"> Sign Up</NavLink>
              </span>
            </p>
            <p className="mt-3">
              <NavLink to="/forgot-password">Forgot Password</NavLink>
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default Login;
