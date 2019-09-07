import React from 'react';
import { Button, Modal } from 'semantic-ui-react';
import './Rules.css';
import Image1 from '../../images/karuta-1.jpg'
import Image2 from '../../images/karuta-2.jpg'
import Image3 from '../../images/karuta-3.jpg'
import Image4 from '../../images/karuta-4.jpg'
import Image5 from '../../images/karuta-5.jpg'
import Image6 from '../../images/karuta-6.jpg'

class Rules extends React.Component {
    state = {
        modalOpen: false
    };

    handleOpen = () => {
        this.setState({
            modalOpen: true,
        });
    };

    handleClose = () => {
        this.setState({
            modalOpen: false,
        })
    }

    render() {
        return (
            <>
                <Modal 
                    trigger={<Button>Rules</Button>} 

                >
                    <Modal.Header>The Rules: </Modal.Header>
                        <Modal.Description>
                            <div className="rules-container">
                                <section className="left-side">
                                    <h1>I．	Preparing for the Game: The players plcae the cards and memorize their locations:</h1>
                                    <p>1) A Kyogi-Karuta game is between two players, who sit on a tatami floor facing each other. First they bow and say “Yoroshiku onegaishimasu”. The Karuta game begins with a bow, and finishes with a bow, like a Judo match. Politeness is very important.</p>
                                    <p>2) The two players put all the Tori-fuda (playing cards) on between them on the tatami facing down, and mix them up well. Then, each picks up 25 cards. The rest are put aside. These “Kara-fuda”* cards are not used in the game. ＊Kara-fuda’s “kara” (空) means “empty” as in “Karaoke” which means empty orchestra. </p>
                                    <p>3) Each player places the playing cards (25 cards each) in his or her territory, or “Ji-jin” 自陣(my territory). The opponent’s territory is called Teki-jin (敵陣) or Aite-Jin (相手陣). Each player arranges the cards in rows in an order that they can most easily memorize. Each player’s territory (Jin陣) should be no wider than 87 centimeters?roughly the width of a tatami mat, or 16.5 card-widths?and no more than 3 rows in height. Each row has a 1 cm gap.</p>
                                    <p>4) After each player places the cards, the reciter times a 15-minute period for the players to memorize the placement of their cards and their opponent’s cards. Ater 13 minutes of memorization, a player can practice reaching fast for cards, but cannot touch the cards yet.</p>
                                    <p>5) When memorization time is over, the reciter declares the beginning of the game. Players bow to each other saying “yoroshiku onegai shimasu”, and bow to the reciter and to a referee.</p>
                                    <h1>II. The Game</h1>
                                    <p>1)	The reciter first reads a poem that is not in the Hyakunin Isshu. The poem is called “Joka序歌”, meaning introduction to the game. While any poem can be used for Joka, currently the All Japan Karuta Association uses the following poem. 難波津に 咲くやこの花 冬ごもり 今を春べと 咲くやこの花 Naniwazuni　sakuyakonoyana fuyugomori Imawo harubeto sakuyakonohana. The reciter repeats the second half of the poem (ImawoHarubeto SakuyaKonohana), and starts to read the first half of the first poem which is chosen randomly from a box of 100 poems. Players and reciter never know which poem is read in which order.</p>
                                    <p>2) The players have to find the matching Tori-fuda on the floor. Remember, on the Tori-fuda (playing cards), only the second part of the poem is written. It means all players must know by heart all the 100 poems to play the game. </p>
                                    <p>3) Immediately after identifying the poem, the players compete to take the matching Tori-fuda as fast as they can. Skilled players do not need to look before swiping at the card as they have already memorized the position during the memorization time. The competition is mostly on the speed of one’s reflexes. </p>
                                    <p>4) There are two ways to take a card. One is to touch the correct card first.</p>
                                    <p>5) The other way to take a card is to swipe it and nearby cards out of the Jin (territory) faster than the opponent can (see figure). In the drawing, the shaded card is the correct card and the player has pushed all 4 cards in a row out of the Jin.) This technique is called “Fuda-oshi札押し (cards-pushing way).</p>
                                    <p>5) The other way to take a card is to swipe it and nearby cards out of the Jin (territory) faster than the opponent can (see figure). In the drawing, the shaded card is the correct card and the player has pushed all 4 cards in a row out of the Jin.) This technique is called “Fuda-oshi札押し (cards-pushing way).</p>
                                    <p>6) The player who takes a card puts it face down beside her.</p>
                                    <p>7) If the card was in her Jin, that reduces one card. If the card was in the opponent’s Jin,,she can give one card from her territory to her opponent. The opponent places this card in his or her preferred row. That means the total number of cards in the opponent’s Jin remains the same.</p>
                                    <p>8) Players pounce on cards aggressively, scattering cards around them. After each turn, players gather up the scattered cards and put them back in their original places (except the card that was read). Then the reciter reads the second part of the poem from the previous turn. Finishing the poem this way is used for the timing of reading the second card. After a one-second pause, the reciter reads the first part of the next poem.</p>
                                    <p>9) The winner is the player whose Jin is cleared (no card left) first.</p>
                                </section>
                                <section className="right-side">
                                    <img className="rule-img" src={Image1} alt="karuta" /><br/>
                                    <img className="rule-img" src={Image2} alt="karuta" /><br/>
                                    <img className="rule-img" src={Image3} alt="karuta" /><br/>
                                    <img className="rule-img" src={Image4} alt="karuta" /><br/>
                                    <img className="rule-img" src={Image5} alt="karuta" /><br/>
                                    <img className="rule-img" src={Image6} alt="karuta" /><br/>
                                </section>
                            </div>
                        </Modal.Description>
                </Modal>
            </>
        );
    }
};

{/* Source: http://karuta.game.coocan.jp/detailedrule-e.html */}

export default Rules;
