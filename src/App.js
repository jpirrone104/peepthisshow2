/* eslint-disable no-unused-expressions */
import React, { Component } from "react";
import MemeCard from "./components/MemeCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import images from "./images.json";

// class App extends Component {
//   // Setting this.state.friends to the friends json array
//   state = {
       
//         images: images, 
//   };
class App extends Component {
  // Setting this.state.images to the images json array
  state = {
    images,
    clickedArray: [],
    topScore: 0,
    score: 0,
    message: "",
    shakeit: "false"
  };
  clickPicture = id => {
    // Arrange the pictures in a random manner
    const shuffledArray = this.shuffleArray(images);
    this.setState({images: shuffledArray});
    // if clicked an image already clicked set this.state.score = 0; empty clickeadArray, end of if block
    if (this.state.clickedArray.includes(id)) {
      this.setState({ score: 0, clickedArray: [], message: "Incorrect!! Game Over ☹️ Click an image to start again!", shakeit: "true"});
    } else if (this.state.clickedArray.length === 12){
      this.setState({ score: 0, clickedArray: [], message: "You Win!", shakeit: "true"})
    }
    else if(this.state.clickedArray.length < 12){
      this.setState({
        clickedArray: this.state.clickedArray.concat([id]),
        score: this.state.score + 1,
        message: "Correct!!",
        shakeit: "false"
      });
    } 
    // set topscore = score if score>topscore.
    if (this.state.score > this.state.topScore) {
      this.setState({ topScore: this.state.score });
    }
    // shake the wrapper if shakeit is set to true
  }
  shuffleArray = (picturesArray) => {
      for (let i = picturesArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [picturesArray[i], picturesArray[j]] = [picturesArray[j], picturesArray[i]];
      }
      return picturesArray;
  }
  render() {
    return (
      <div className="App">
        {/* <h3 className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3> */}
        <Wrapper>
        <Title>Peep This Show
        <h3 className="App-intro">
          <strong>Click on an image to earn points, but don't click on any, more than once!</strong> 
          <p className = "score"><strong>Score: {this.state.score} | TopScore: {this.state.topScore}</strong></p>
          <p className="message"><strong>{this.state.message}</strong></p>
        </h3>
        </Title>
        {this.state.images.map(image => (
          <MemeCard
            clickPicture={this.clickPicture}
            // removeFriend={this.removeFriend}
            id={image.id}
            key={image.id}
            image={image.image}
            name={image.name}
          />
          ))}
      </Wrapper>
      </div>
    );
  }
  
};

export default App;
