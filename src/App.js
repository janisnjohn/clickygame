import React, { Component } from 'react';
import './App.css';
import Container from './components/Bootstrap/Container';
import Row from './components/Bootstrap/Row';
import Col from './components/Bootstrap/Col';
import Jumbotron from './components/Bootstrap/Jumbotron';
import Nav from './components/Nav';
import friends from "./friends.json";
import FriendCard from "./components/FriendCard/FriendCard";
import Wrapper from './components/Wrapper';

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends: friends,
    score: 0,
    highScore: 0,
    clickCards: [],
    message: "Click and Image to Begin",
  }

  shuffle(id) {
    let array = this.state.friends;
    let currentIndex = array.length, temporaryValue, randomIndex;
    if(this.state.clickCards.indexOf(id) === -1) {
      // While there remain elements to shuffle...
      while(0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      this.setState({
        friends:array, 
        clickCards:[id, ...this.state.clickCards], 
        score:this.state.score+1, 
        message:"You Guessed Correctly",
      });
    } else {
        if(this.state.score > this.state.highScore) {
        this.setState({
          message: "You Guessed Wrong", 
          score: 0, 
          highScore:this.state.score, 
          clickCards:[],
        });
        } else {
        this.setState({
          message: "You Guessed Wrong", 
          score: 0, 
          clickCards:[],
        });
        }
      }
  }

  render() {
    return (
      <Container>
      <Nav 
        score={this.state.score}
        message={this.state.message}
        highScore={this.state.highScore}
      />
        <Row>
          <Col size='lg-12'>
            <Jumbotron>
              <center>
                <h1 className="App-title">CLICKY GAME</h1>
                <p className="App-intro">
                Click on an image to earn points, but don't click on any more than once!
                </p>
              </center>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <center>
            <Wrapper>
              {this.state.friends.map(friend => (
                <FriendCard
                  shuffle={this.shuffle.bind(this)}
                  id={friend.id}
                  key={friend.id}
                  image={friend.image}
                />
              ))}
            </Wrapper>
          </center>
        </Row>
      </Container>
    );
  }
}

export default App;
