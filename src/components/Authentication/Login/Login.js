import firebase from "firebase/app";
import "firebase/auth";
import React, { useContext } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { UserContext } from "../../../App";
import logo from "../../../Image/logo/Answar-IT.jpg";
import googleLogo from "../../../Image/logo/google-logo.png";
import firebaseConfig from "../../Authentication/firebase.config";
import "./Login.css";

const Login = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  console.log(loggedInUser);
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathName: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        console.log(result.user);
        const signedInUser = { name: displayName, email, picture: photoURL };
        setLoggedInUser(signedInUser);
        setUserToken();
        history.push("/");
      })
      .catch(function (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  //this section for sesseion stroge data saving
  const setUserToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {
        // Handle error
      });
  };
  return (
    <div className="container-fluid">
      <div className="login">
        <Link to="/" className="logo mb-5">
          {" "}
          <img className="logoIcon" src={logo} alt="" />{" "}
        </Link>

        <form className=" container login-form px-4" action="">
          <h2 className="text-brand"> Login with </h2>

          <div onClick={handleGoogleSignIn} className="googleLogin">
            <img className="googleLogo" src={googleLogo} alt="" />
            <p> Continue with Google</p>
          </div>

          <div>
            {/* <p>
              {" "}
              Don't have an account?{" "}
              <Link to="/create-account" style={{ color: "#3F90FC" }}>
                {" "}
                Create an account{" "}
              </Link>
            </p> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
