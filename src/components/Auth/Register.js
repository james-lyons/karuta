import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import axios from 'axios';
import API_URL from '../../constants'

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        password2: "",
        errors: []
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const newUser = this.state;
        axios.post(`${ API_URL }/auth/register`, newUser,
            { withCredentials: true },
            { credentials: 'same-origin' },
            { headers:
                { 'Access-Control-Allow-Origin': '*' }})
            .catch((err) => {
                console.log(err)
                this.setState({
                    errors: [err.response]
                });
            });
    };

    render() {

        return (
            <>
                <Modal trigger={ <Button>Register</Button> }>
                    <Modal.Header>Register An Account</Modal.Header>
                        <Modal.Description>
                            <div className="row">
                                { this.state.errors && this.state.errors.map((e, i) => (
                                    <div className="alert alert-danger alert-dismissible fade show"
                                        style={{width: '100%'}} role="alert" key={ i }>
                                        { e.message }
                                        <button className="close" data-dismiss="alert">
                                            <span aria-hidden="true">&times;</span>
                                        </button>    
                                    </div>
                                ))}
                            <section id="register" className="ui form">
                                <form onSubmit={ this.handleSubmit }>
                                    <div className="field">
                                        <label htmlFor="username">Username</label>
                                        <input
                                            type="text"
                                            id="username"
                                            name="username"
                                            value={ this.state.username }
                                            onChange={ this.handleChange }
                                            placeholder="Example: EatMyDust"
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="email">Email</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={ this.state.email }
                                            onChange={ this.handleChange }
                                            placeholder="example@example.com"
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="password">Password</label>
                                        <input
                                            type="password"
                                            id="password"
                                            name="password"
                                            value={ this.state.password }
                                            onChange={ this.handleChange }
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div className="field">
                                        <label htmlFor="password">Confirm Password</label>
                                        <input
                                            type="password"
                                            id="password2"
                                            name="password2"
                                            value={ this.state.password2 }
                                            onChange={ this.handleChange }
                                            placeholder="Password"
                                        />
                                    </div>
                                    <br/>                              
                                    <div className="actions">
                                        <div className="ui black deny button">
                                            Cancel
                                        </div>
                                        <button type="submit" className="ui positive right labeled icon button">
                                            Register
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

export default Register;