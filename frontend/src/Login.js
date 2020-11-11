import React, {Component} from 'react'

class LogIn extends Component{
    handleChange = (e) => {
     this.setState({
         [e.target.name]: e.target.value
     })
    }

    handleSubmit = (e) => {
        e.preventDefault()

        fetch("http://localhost:3000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            })
        })
        .then(res => res.json())
        .then()
    }
    render(){
        return(
            <div>
                <h2>log In</h2>
                <form onSubmit={(e) => this.handleSubmit}>
                    <label>Username</label>
                    <input onChange={(e) => this.handleChange(e)} name="username" type="text" />
                    <label>Password</label>
                    <input onChange={(e) => this.handleChange(e)} name="password" type="password" />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default LogIn







