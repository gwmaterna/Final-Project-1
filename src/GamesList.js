import React, {useState} from 'react';
import Game from './Game';
import { projectsApi } from './rest/ProjectApi';
import { render } from "react-dom";

export class GamesList extends React.Component {
    state = {
        games: []
    };

    componentDidMount() {
        this.fetchGames();
    }

    fetchGames = async() => {
        const games = await projectsApi.get();
        console.log('games list:', games);
        this.setState({games});
    }

    updateGame = async(updateGame) => {
        await projectsApi.put(updateGame);
        this.fetchGames();
    };

    render() {
        return (
            <div>
                <h2>Here are all of your favorite games!</h2>
                {this.state.games.map((game) => (
                    <Game
                        game = {game}
                        key = {game._id}
                        updateGame = {this.updateGame}
                    />
                ))}
            </div>
        )
    }
}

export default GamesList;