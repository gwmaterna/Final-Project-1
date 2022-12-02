import React from "react";
import UsernameForm from "./components/UsernameForm"; 
import Games from "./Game";
// import GameForm from "./components/GameForm"; 
// import ReviewForm from "./components/ReviewForm";

function Forms() {
    return (
        <div>
            {/* <h1>{games.username}</h1> */}
            <h2>Fill out these forms to contribute:</h2>
            <br />
            <UsernameForm />
            <br />
            {/* <GameForm />
            <br />
            <ReviewForm /> */}
        </div>
    )
}

export default Forms;