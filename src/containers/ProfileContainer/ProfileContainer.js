import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css'

class ProfileContainer extends React.Component {
    state = {
        user: [],
        edit_username: "",
        edit_email: "",
        edit_profile_image: "",
        profile_edit_display: "none",
    }

    componentDidMount = () => {
        const currentUser = localStorage.getItem('uid');
        axios.get(`${ API_URL }/user/${ currentUser }`, { withCredentials: true })
            .then((res) => {
                this.setState({
                    user: res.data.data,
                    edit_username: res.data.data.username,
                    edit_email: res.data.data.email,
                    edit_profile_image: res.data.data.profile_image
                });
            })
            .catch((err) => console.log(err));
    };   

    onProfileEdit = (event) => {
        event.preventDefault();
        const username = this.state.edit_username;
        const email = this.state.edit_email;
        const profile_image = this.state.edit_profile_image;
        const currentUser = localStorage.getItem('uid');
        axios.put(`${API_URL}/user/${currentUser}`,
            { username: username, email: email, profile_image: profile_image },
            { withCredentials: true })
                .then((res) => console.log(res))
                .catch((err) => console.log(err.response))
    }

    onEditInputChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    showProfileEditButton = () => {
        this.state.profile_edit_display === "none" ?
        this.setState({ profile_edit_display: '' }) :
        this.setState({ profile_edit_display:'none' })
    };

    render() {
        return (
            <>
                {this.state.user && 
                    <Profile 
                        user = {this.state.user}
                        edit_email = { this.state.edit_email }
                        edit_username = { this.state.edit_username}
                        onEditInputChange = { this.onEditInputChange }
                        edit_profile_image = { this.state.edit_profile_image }
                        onDeckDelete ={ this.onDeckDelete }
                        onProfileEdit = {this.onProfileEdit }
                        onInputChange = { this.onInputChange }
                        showProfileEditButton = { this.showProfileEditButton }
                        profile_edit_display = { this.state.profile_edit_display } 
                    />
                }
            </>
        );
    };
};

export default ProfileContainer;