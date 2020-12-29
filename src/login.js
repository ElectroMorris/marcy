import React from "react";
import { MDBInput, MDBBtn, MDBCol } from "mdbreact";
import { BrowserRouter as Router, withRouter } from "react-router-dom";
import "./style.css";

const usersJson = {
    description: "Login and passwords of users",
    users: {
        testUser: {
            password: "test",
            type: "test"
        },
        user: {
            password: "user",
            type: "test"
        },
        admin: {
            password: "admin",
            type: "test"
        }
    }
};

class Login extends React.Component {
    state = {
        userName: "",
        password: "",
        usersJson: {}
    };
    componentDidMount() {
        this.setState({ usersJson });
    }

    getLoginData = (value, type) =>
        this.setState({
            [type]: value
        });

    onFormSubmit = e => {
        e.preventDefault();
        const { usersJson, userName, password } = this.state;
        const filterUserName = Object.keys(usersJson.users).filter(
            e => e === userName
        );
        if (
            filterUserName.length > 0 &&
            usersJson.users[userName].password === password
        ) {
            window.localStorage.setItem('isLoggedIn', 'true');
            window.open("/home","_self")
        } else {
            alert("Wrong login or password");
        }
    };
    render() {
        return (
            <MDBCol className="form-parent">
                <form onSubmit={this.onFormSubmit}>
                    <p className="h5 text-center mb-4">Sign in</p>
                    <div className="grey-text">
                        <MDBInput
                            label="Type your email"
                            icon="envelope"
                            group
                            type="text"
                            validate
                            error="wrong"
                            success="right"
                            getValue={value => this.getLoginData(value, "userName")}
                        />
                        <MDBInput
                            label="Type your password"
                            icon="lock"
                            group
                            type="password"
                            validate
                            getValue={value => this.getLoginData(value, "password")}
                        />
                    </div>
                    <div className="text-center">
                        <MDBBtn type="submit" onClick={this.onFormSubmit}>
                            Login
                        </MDBBtn>
                    </div>
                </form>
            </MDBCol>
        );
    }
}
export default withRouter(Login);