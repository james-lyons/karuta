import React from 'react';
import axios from 'axios';
import { Button, Modal } from 'semantic-ui-react';
import API_URL from '../../constants';
import './Auth.css'

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        errors: []
    };

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const user = this.state;
        axios.post(`${API_URL}/auth/login`, user, { withCredentials: true })
            .then((res) => {
                console.log(res);
                this.props.setCurrentUser(res.data.id);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    render() {

        return (
            <>
                <Modal trigger={<Button>Login</Button>}>
                    <Modal.Header>Login</Modal.Header>
                    <Modal.Description>
                        <div>
                            {this.state.error && (
                                <div>
                                    {this.state.error}
                                    <button type="button" data-dismiss="alert">
                                        <span>&times;</span>
                                    </button>
                                </div>
                            )}
                            <section id="login" className="ui form">
                                <form onSubmit={this.handleSubmit}>
                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder="Email" />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Password</label>
                                        <input type="password" id="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="password" />
                                    </div>
                                    <br/>
                                    <div className="actions">
                                        <button type="submit" className="ui positive right labeled icon button">
                                            Login
                                            <i className="checkmark icon"></i>
                                        </button>
                                    </div>
                                </form>
                            </section>
                        </div>
                    </Modal.Description>
                </Modal>
            </>
        );
    };
};

export default Login;