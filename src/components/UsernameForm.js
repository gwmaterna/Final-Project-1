import React, {useState} from 'react';
// import { ReactDOM } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';

// function UsernameForm() {

export const UsernameForm = (props) => {  
  const [username, setUsername] = useState("");
  const [gamename, setGamename] = useState("");
  const [review, setReview] = useState("");

  const onSubmit = (e) =>{
    e.preventDefault();
    if (username) {
      props.addUsername(username);
      setUsername('')
      console.log(username);
// Do I need 2 more if/else statements for game and review?  How does this work?
    } else {
      console.log('invalid username input');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Enter your username: 
        <br />
        <input
          type="text"
          placeholder='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </label>
      <br />
      <br />
      <label>Enter your favorite game:
        <br />
        <input
          type="text"
          placeholder='game'
          value={gamename}
          onChange={(e) => setGamename(e.target.value)}
        />
      </label>
      <br />
      <br />      
      <label>And enter why you love it!
        <br />
        <textarea
          placeholder='your review'
          value={review}
          onChange={(e) => setReview(e.target.value)}
          rows={5}
          cols={65}
        />
      </label>
      <br />
      <button className='btn btn-primary' type='submit'>Submit</button>
    </form>
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
