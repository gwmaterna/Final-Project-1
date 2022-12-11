import React from "react";
// import ReactDOM from 'react-dom/client';
import Home from "./Home";
import UsernameForm from "./components/UsernameForm";
import Forms from "./Forms";
import GamesList from "./GamesList";
import Game from "./Game";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import { Button } from "bootstrap";
// import Button from "react-bootstrap/Button";
// import ButtonGroup from 'react-bootstrap/ButtonGroup';
// import Alert from "react-bootstrap/Alert";
// import Card from 'react-bootstrap/Card';
import Container from "react-bootstrap/Container";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  // useRouteMatch
} from 'react-router-dom';
// import { render } from "react-dom";

export default function App() {
  
    return (
      
      <Router>
        <div>
          
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/games">The Games</Link>
            </li>
            <li>
              <Link to="/forms">Add to our list here!</Link>
            </li>
          </ul>
          
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/games">
              <GamesList />
            </Route>
            <Route path="/forms" >
              <UsernameForm />
            </Route>
          </Switch>
        </div>
      </Router>
      
    );
}


// export default function App() {

//   return (
//     <Container>
//     <Router>
//       <div>
//         <ButtonGroup>
//           <Button variant="outline-secondary">
//             <Link to="/">Home</Link>
//           </Button> 
//           <Button variant="outline-secondary">
//             <Link to="/friends">Friends</Link>
//           </Button>
//           <Button variant="outline-secondary">
//             <Link to="/posts">Posts</Link>
//           </Button> 
//         </ButtonGroup>
        
//         <Switch>
//           <Route path='/posts'>
//             <Posts posts={posts} />
//           </Route>
//           <Route path="/friends">
//             <Friends names={['Tom', 'Sally', 'Samantha']} />
//           </Route>
//           <Route path="/">
//             <Home />
//           </Route>
//         </Switch>
//       </div>
//     </Router>
//     </Container>
//   );
// }

// function Home() {
//   return <h2>Home</h2>
// }

// function Friends(props) {
//   const { names } = props;

//   return (
//     <div>
//       <ul>
//         {names.map((friend,index) => (
//           <li key={index}>{friend}</li>
//         ))}
//       </ul>
//     </div>
//   );  
// }

// function Posts({ posts }) {
//   const match = useRouteMatch();
//   const findPostById = (id) =>
//   posts.filter((posts) = posts.id == id)[0];
//   return (
//     <div>
//       <h2>Posts</h2>
      
//         {posts.map((post, index) => {
//           return (
//             <Alert key={index} variant="primary"> 
//               <Link to={`${match.url}/${post.id}`}>
//                 {post.title}
//               </Link>
//             </Alert>
//           );
//         })}
      
//       <Switch>
//         <Route
//         path={`${match.path}/:postId`}
//         render={(props) => (
//           <Post
//             {...props}
//             data={findPostById(props.match.params.postId)}
//           />  
//         )}
//         />
//         <Route path={match.path}>
//           <h3>Please select a post.</h3>
//         </Route>  
//       </Switch>
//     </div>
//   );
// }

// function Post(props) {
//   const { data } = props;
//   return data == undefined ? <h1>404 Not Found</h1> : (
  
//     <Card>
//       <Card.Header>{data.title}</Card.Header>
//       <Card.Body>
//         <Card.Subtitle>{data.date}</Card.Subtitle>
//         <Card.Text>{data.content}</Card.Text>
//       </Card.Body>
//     </Card>
//   );
// }
