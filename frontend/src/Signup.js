import React, {Component} from 'react'

class Signup extends Component{

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })


    }

    signUp = (e) => {
    e.preventDefault()

    fetch("http://localhost:3000/users", {
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
    .then(() => {
        this.props.history.push("/login")
    })
    }
    
    render(){
        return(
            <div>
                <h2>Signup</h2>
                    <form onSubmit={(e) => this.signUp(e)}>
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
export default Signup