import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import Profile from '../../components/Profile/Profile';
import './ProfileContainer.css'

class ProfileContainer extends React.Component {
    state = {
        user: {}
    };

    componentDidMount = () => {
        const currentUser = localStorage.getItem('uid');
        axios.get(`${ API_URL }/user/${ currentUser }`, { withCredentials: true })
            .then((res) => {
                this.setState({user: res.data.data})
            })
            .catch((err) => console.log(err));
    };    

    render() {
        return (
            <>
                {this.state.user && <Profile user={this.state.user}/>}
            </>
        );
    };
};

export default ProfileContainer;