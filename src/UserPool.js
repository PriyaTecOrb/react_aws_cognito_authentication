import {CognitoUserPool} from "amazon-cognito-identity-js";

const poolData = {
	UserPoolId: "ap-south-1_f6avfq7Di",
	ClientId: "6tbuktqmn2mh6cfoaqqfu81vh9"
}
 
export default new CognitoUserPool(poolData);