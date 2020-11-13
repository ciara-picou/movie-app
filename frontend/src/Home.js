import React from 'react';

 const Home= (props) => {
 const handleLogin=()=>{props.history.push("/login")}
 const handleSignup=()=>{props.history.push("/signup")}
    return (
      <div>
          <h2>MovieNight</h2>
          <button onClick={handleLogin}className="log-in">Login</button>
          <button onClick={handleSignup}className="sign-up">Sign Up</button>
      </div>

    );

}

export default Home

