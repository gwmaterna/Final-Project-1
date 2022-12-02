import React, {useState} from "react";
import UsernameForm from "./components/UsernameForm"; 
import { projectsApi } from './rest/ProjectApi';
// import DeleteButton from "./deletebutton";
// import AddReviewForm from "./addreviewform";

// function Games() {
//     return <h2>Games</h2>
// }

// export default Games;

const Game = (props) => {
    const {game, updateGame} = props;

    const addUsername = (username) => updateGame({...game, username});

    const addGamename = (gamename) => updateGame({...game, gamename});

    const addReview = (review) => updateGame({...game, review});

    const addGame = (game) => {
        updateGame({...game, gameInfo: [game.gameInfo, game]})
    }  // gameInfo is not made yet

    const gameInfo = () => (
        <ul>
            {game.gameInfo.map((game, index) => (
                <li key={index}>
                    <label> {`${game.username} ${game.gamename} ${game.review}`} </label>
                    <button>DeleteButton</button> 
                    {/* must be built out w onClick */}
                </li>
            ))}
        </ul>
    );
    // return (
    //     // incomplete
    // );
}

export default Game;