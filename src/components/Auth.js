import React, { createContext } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import Pool from "../UserPool";

const AuthContext = createContext();

const Auth = (props) => {
  const getSession = async () => {
    return await new Promise((resolve, reject) => {
      const user = Pool.getCurrentUser();
      console.log(user);
      if (user) {
        user.getSession((err, session) => {
          if (err) {
            reject(new Error("oops"));
          } else {
            resolve(session);
          }
        });
      } else {
        // reject();
      }
    });
  };
  const authenticate = (Username, Password) => {
    return new Promise((resolve, reject) => {
      const user = new CognitoUser({ Username, Pool });

      const authDetails = new AuthenticationDetails({ Username, Password });
      user.authenticateUser(authDetails, {
        onSuccess: (data) => {
          console.log("=-----------");
          console.log(data);
        },
        onFailure: (err) => {
          console.log(err);
          if (err.code === "UserNotFoundException") {
            // Handle user not found error
          } else if (err.code === "NotAuthorizedException") {
            alert("Unauthorized Access");
            // Handle incorrect username or password error
          } else if (err.code == "UserNotConfirmedException") {
            alert("User is not Confirmed");
            // Handle other errors
          }
        },
      });
    });
  };
  return (
    <AuthContext.Provider value={{ authenticate, getSession }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export { Auth, AuthContext };
