import React from 'react';
import './Profile.css'

const mapper = (decks) => {
    const deckArr = decks.map((deck) => <div id = {deck._id} className="profile-decks-div">
                            <h1 className="profile-decks-div-h1">{deck.title}</h1>
                            <h1 className="profile-decks-div-h1">{deck.description}</h1>
                            <h1 className="profile-decks-div-h1">Number of cards: {deck.cards.length}</h1>
                            <button onSubmit="">Delete deck</button>
                            {/* <button onSubmit="">Edit deck</button> */}
                        </div>
    );
    return deckArr
};

const Profile = ({user: {username, profile_image, signup_date, decks, decks_created, games_played, games_won }}) => {
    return (
        <>
            <section className="profile-section">
                <img className="profile-image" src={profile_image} />
                <div className="profile-items">
                    <p>Username: {username}</p>
                    <p>decks_created: {decks_created}</p>
                    <p>games_played: {games_played}</p>
                    <p>games_won: {games_won}</p>
                </div>
            </section>
            <div className="profile-decks">
                {decks && mapper(decks)}
            </div>
        </>
    );
};

export default Profile;