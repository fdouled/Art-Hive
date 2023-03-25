import React from "react";
import { Link } from 'react-router-dom'

import { getAuth, EmailAuthProvider, GoogleAuthProvider } from 'firebase/auth'

import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'


const firebaseUIConfig = {
  signInOptions: [ //array of sign in options supported
    //array can include just "Provider IDs", or objects with the IDs and options
    GoogleAuthProvider.PROVIDER_ID,
    { provider: EmailAuthProvider.PROVIDER_ID, requiredDisplayName: true },
  ],
  signInFlow: 'popup', //don't redirect to authenticate
  credentialHelper: 'none', //don't show the email account chooser
  callbacks: { //"lifecycle" callbacks
    signInSuccessWithAuthResult: () => {
      return false; //don't redirect after authentication
    }
  }
}

function LoginPage() {
  const auth = getAuth(); //access the "authenticator"
  return (
    <div className = "whole">
      <h1>Login</h1>
      <form className="login-form">
      <StyledFirebaseAuth uiConfig={firebaseUIConfig} firebaseAuth={auth} />
      <Link to='/opener'><input type="submit" value="Enter the Hive" /></Link>
      </form>
      <br/>

    </div>
  );
}

export default LoginPage;
