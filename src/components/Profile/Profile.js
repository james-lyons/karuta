import React from 'react';
import axios from 'axios';
import API_URL from '../../constants';
import './Profile.css';

const Profile = ({
    user:
        {
            username,
            profile_image,
            decks, decks_created,
            games_played,
            games_won,
        },
        onProfileEdit,
        edit_username,
        edit_email,
        edit_profile_image,
        profile_edit_display,
        onEditInputChange,
        showProfileEditButton,
    }) => {

    const onDeckDelete = (deck) => {
        axios.delete(`${ API_URL }/deck/${ deck._id }`, { withCredentials: true })
            .then((res) => {
                window.location.reload();
            })
            .catch((err) => console.log(err.response));
    };
    
    const mapper = (decks) => {
        const deckArr = decks.map((deck) => 
                            <div className="profile-decks-div">
                                <h1 className="profile-decks-div-h1">
                                    { deck.title }
                                </h1>
                                <h1 className="profile-decks-div-h1">
                                    { deck.description }
                                </h1>
                                <h1 className="profile-decks-div-h1">
                                    Number of cards: { deck.cards.length }
                                </h1>
                                <button 
                                    id={ deck._id }
                                    onClick={ () => onDeckDelete(deck) }>
                                        Delete deck
                                </button>
                            </div>
        );
        return deckArr;
    };

    return (
        <>
            <section className="profile-section">
                <img className="profile-image" src={profile_image} alt="profile" />
                <div className="profile-items">
                    <p>Username: { username }</p>
                    <p>decks_created: { decks_created }</p>
                    <p>games_played: { games_played }</p>
                    <p>games_won: { games_won }</p>
                    <button
                        onClick={ showProfileEditButton }>
                            Edit Profile
                    </button>
                </div>
                <div className="edit-profile-form-div"
                    style={{ display: profile_edit_display }}>
                    <form className="profile-form" onSubmit={ onProfileEdit }>
                        <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="edit_username"
                            name="edit_username"
                            placeholder="KardMaster"
                            value={ edit_username }
                        />
                        <br />
                        <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="edit_email"
                            name="edit_email"
                            placeholder="email@email.com"
                            value={ edit_email }
                        />
                        <br />
                        <input 
                            onChange={ onEditInputChange }
                            type="text"
                            id="profile_image"
                            name="profile_image"
                            placeholder="image address here"
                            value={ edit_profile_image }
                        />
                        <br />
                        <button
                            type="submit"
                            id="edit-profile"
                            className="profile-btn">
                                Edit profile
                        </button>
                    </form>
                </div>
            </section>
            <div className="profile-decks">
                { decks && mapper(decks) }
            </div>
        </>
    );
};

export default Profile;