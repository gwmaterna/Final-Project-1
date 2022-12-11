import React from "react"; 
import Container from "react-bootstrap/Container";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Home() {
    return (
        <Container>
        <Row> 
            <Col>
                
            </Col> 
            <Col lg="5"> 
                <div>
                 <h1>Your Favorite Games!</h1>
                </div>
            </Col>
            <Col></Col>
        </Row>
        <br /><br />
        <Row>
            <Col>
                {/* <Image src="super-mario-bros-3.large.jpg"
                width={400}
                height={300} /> */}
                <img src="https://images.nintendolife.com/23a8de6b92020/super-mario-bros-3.large.jpg"
                                width={250}
                                height={200} 
                                className='img-thumbnail'/>
                <br /><br />
                <img src="https://cdn.cloudflare.steamstatic.com/steam/apps/403430/ss_840d4046749a70d0373c085d100e967ecea2753d.1920x1080.jpg?t=1580375648"
                                width={250}
                                height={200} 
                                className='img-thumbnail'/>                
            </Col>
            <Col lg="6" className="h4">
                <h4>Greetings, gamers!  We need your help!  We want to compile a list of your favorite
                     video games of all time.  We want to know who you are (your username is just fine,
                      just keep it PG), what your favorite video game is, and why it is your favorite.  
                      We welcome entries from any system and any era.  Playstation, XBox, Nintendo, PC,
                       Atari, Sega Dreamcast, Coleco, Intelivision, it's all welcome here!  At the top 
                       of the screen, just navigate to the forms page to participate.  Then navigate to
                        the Games page to see your entry.  Thank you so much for your participation!  
                        GG's! 
                </h4>
            </Col>
            <Col>
                <img src="https://assets-prd.ignimgs.com/2021/12/20/elden-ring-1640039956608.png"
                                width={250}
                                height={200} 
                                className='img-thumbnail'/>   
                <br /><br />
                <img src="https://www.gamespot.com/a/uploads/original/1587/15875866/3913985-11-30-2021_12-55-52_pm-whfucykm.png"
                                width={250}
                                height={200} 
                                className='img-thumbnail'/>                    
            </Col>
        </Row>    
        </Container>
    );
}

export default Home;