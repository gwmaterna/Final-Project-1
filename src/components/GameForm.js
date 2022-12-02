import React, {useState} from 'react';
// import { ReactDOM } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

function GameForm() {
  const [game, setGame] = useState("");

  return (
    <form>
      <label>Enter your favorite game:
        <br />
        <input
          type="text"
          value={game}
          onChange={(e) => setGame(e.target.value)}
        />
      </label>
    </form>
  );
}

export default GameForm;