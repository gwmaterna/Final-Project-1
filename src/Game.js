import React, {useState} from "react";
import UsernameForm from "./components/UsernameForm"; 
import { projectsApi } from './rest/ProjectApi';
// import DeleteButton from "./deletebutton";
// import AddReviewForm from "./addreviewform";

// function Games() {
//     return <h2>Games</h2>
// }

// export default Games;

export const Game = (props) => {
    const {game, updateGame} = props;

    const addUsername = (username) => updateGame({...game, username});

    const addGamename = (gamename) => updateGame({...game, gamename});

    const addReview = (review) => updateGame({...game, review});
}