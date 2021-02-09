import React, { Component } from "react";
class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        username: this.state.username,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((userInfo) => {
        localStorage.token = userInfo.token;
        this.props.history.push("/movies");
      });
  };
  render() {
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label>Username</label>
          <input
            onChange={(e) => this.handleChange(e)}
            name="username"
            type="text"
          />
          <label>Password</label>
          <input
            onChange={(e) => this.handleChange(e)}
            name="password"
            type="password"
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
export default Login;
