import React, {useState} from 'react';
// import { ReactDOM } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "bootstrap";
// import App from '../App';
import Button from "react-bootstrap/Button";
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Alert from "react-bootstrap/Alert";
import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import { Form } from 'react-bootstrap';

// function UsernameForm() {

export const UsernameForm = (props) => {  
  // const [username, setUsername] = useState("");
  // const [gamename, setGamename] = useState("");
  // const [review, setReview] = useState("");

  const [allGames, setAllGames] = useState([]);

  const [gameInfo, setGameInfo] = useState({
    username: '',
    gamename: '',
    review: '',
  });

  const handleChange = (e) => {
    setGameInfo({...gameInfo, [e.target.name]: e.target.value});
    
    // setUsername(e.target.value)
    // setGamename(e.target.value)
    // setReview(e.target.value)
  };

  const onSubmit = (e) => {
    e.preventDefault();
    
    setAllGames([...allGames, gameInfo]);
    console.log(allGames)
    setGameInfo({
      username:(''),
      gamename:(''),
      review:(''),
    });
    
  };


//   const onSubmit = (e) =>{
//     e.preventDefault();
//     if (username && gamename && review) {
//       // props.addUsername(username);
//       props.addGame({username, gamename, review});
//       setUsername('');
//       setGamename('');
//       setReview('');
//       console.log(username);
// // Do I need 2 more if/else statements for game and review?  How does this work?
//     } else {
//       console.log('invalid username input');
//     }
//   };

  return (
  <Container className='mx-auto'> 
    <h2>Fill out these forms to contribute:</h2><br />
    <Card> 
    <Card.Body> 
       
    <Form onSubmit={onSubmit}>
    <Form.Group className="mb-3" controlId="formBasicUsername">
      <Form.Label>Enter your username: 
        
        <Form.Control 
          type="text"
          placeholder='username'
          value={gameInfo.username}
          name="username"
          // onChange={(e) => setUsername(e.target.value)}
          onChange={handleChange}
        />
      </Form.Label>
    </Form.Group>  
      
    <Form.Group className="mb-3" controlId="formBasicGamename">  
      <Form.Label>Enter your favorite game:
        
        <Form.Control
          type="text"
          placeholder='game'
          value={gameInfo.gamename}
          name="gamename"
          // onChange={(e) => setGamename(e.target.value)}
          onChange={handleChange}
        />
      </Form.Label>
    </Form.Group>   
      
    <Form.Group className="mb-3" controlId="formBasicReview">        
      <Form.Label>And enter why you love it!
        <br />
        <textarea
          placeholder='your review'
          value={gameInfo.review}
          name="review"
          // onChange={(e) => setReview(e.target.value)}
          onChange={handleChange}
          rows={5}
          cols={60}
        />
      </Form.Label>
    </Form.Group>  
      
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Card.Body>
    </Card>
    
  </Container>  
  );
}

export default UsernameForm;


// function BasicExample() {
//   return (
//     <Form>
//       <Form.Group className="mb-3" controlId="formBasicEmail">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control type="email" placeholder="Enter email" />
//         <Form.Text className="text-muted">
//           We'll never share your email with anyone else.
//         </Form.Text>
//       </Form.Group>

//       <Form.Group className="mb-3" controlId="formBasicPassword">
//         <Form.Label>Password</Form.Label>
//         <Form.Control type="password" placeholder="Password" />
//       </Form.Group>
//       <Form.Group className="mb-3" controlId="formBasicCheckbox">
//         <Form.Check type="checkbox" label="Check me out" />
//       </Form.Group>
//       <Button variant="primary" type="submit">
//         Submit
//       </Button>
//     </Form>
//   );
// }

// export default BasicExample;
