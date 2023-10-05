import React, { Component } from 'react'

class userDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userData: "",
        }
    }

    componentDidMount() {
        fetch("http://localhost:3000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
                token: window.localStorage.getItem("token"),
            }),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data, "userData");
                this.setState({
                    userData: data.data
                })
            });
    }
    logout = () => {
        window.localStorage.clear()
        window.location.href = "./sign-in"
    }
    render() {
        return (
            <div>
                Name <h1>{this.state.userData.fname}</h1>
                Email <h1> {this.state.userData.email}</h1>
                <button onClick= {this.logout}className="btn btn-primary">Logout</button>
            </div>
        )
    }
}

export default userDetails