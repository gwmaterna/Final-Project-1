import React, {useState} from "react";
import { render } from "react-dom";
import UsernameForm from "./components/UsernameForm"; 
import { projectsApi } from './rest/ProjectApi';




const Game = (props) => {
    const {game, updateGame} = props; // Deconstructing props

    // const addUsername = (username) => updateGame({...game, username});

    // const addGamename = (gamename) => updateGame({...game, gamename});

    // const addReview = (review) => updateGame({...game, review});

    // const addGame = (game) => {
    //     updateGame({...game, gameInfo: [game.gameInfo, game]})
    // }  // gameInfo is not made yet

    const deleteGame = () => {
        projectsApi.delete(game);
        updateGame(game);
    }

    const setGameInfo = (game) => {
        updateGame({...game, gameInfo: [game.gameInfo, game]})
    }    

    const gameInfo = () => (
        
        
        <ul>
            {game.gameInfo.map((gameInfo, index) => (
                <li key={index}>
                    <label> {`${gameInfo.username} ${gameInfo.gamename} ${gameInfo.review}`} </label>
                    <button className="btn btn-danger" onClick={deleteGame}>Delete Game</button> 
                </li>
                
            ))}
        </ul>
        );
    return (    
        <div>
        {
        gameInfo({gameInfo: game._id, deleteGame})
        }    
        <UsernameForm setGameInfo = {setGameInfo} />
        </div>
    );
    // return (
    //     // incomplete
    // );
}

export default Game;