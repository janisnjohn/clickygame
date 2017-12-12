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
      state ={
        friends: friends,
        score: 0
      }

  handleIncrement = () => {
    // We always use the setState method to update a component's state
    this.setState({ count: this.state.score + 1 });
  };

    shuffle () {
      console.log("shuffle");
      let array = this.state.friends;
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      this.setState({friends:array});
    }


  render() {
    return (
      <Container>
      <Nav />
        <Row>
          <Col size='lg-12'>
            <Jumbotron>
              <center><h1 className="App-title">CLICKY GAME</h1>
             <p className="App-intro">
              Click on an image to earn points, but don't click on any more than once!
             </p></center>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
        <center><Wrapper>
          {this.state.friends.map(friend => (
          <FriendCard
            shuffle={this.shuffle.bind(this)}
            id={friend.id}
            key={friend.id}
            image={friend.image}
          />
        ))}
          </Wrapper></center>
        </Row>
      </Container>
    );
  }
}

export default App;
