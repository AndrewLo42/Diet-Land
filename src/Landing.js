import React, { Component } from 'react';
import './landing.css';

function DietPicker(props) {
  var maxNumber = 3;
  var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
  return <div>{randomNumber}</div>;
}

class Landing extends Component {
  constructor(props){
    super(props);
    this.state = {
      isToggleOn: false,
    };
    this.wheelClick = this.wheelClick.bind(this);
  }

  wheelClick() {
    var maxNumber = 3;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    let choice = randomNumber;
    if (choice === 1 )
    {
      
    };

  }
  render() {
    return (
      <div class = "app">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"/>

        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <div class="floathead">
          <p>Welcome to the Crevice Diet World </p>

        <button class="wheel" onClick={this.wheelClick}>
          What diet should we do today?
        </button>
        </div>
      <div class="content">
        <div class = "yson">
          <div class="slidewrap">
            <img src="fat.png" class="pika"/>
            <div id="slide">
              <p>The keto diet is a low-carb, high-fat diet. It lowers blood sugar and insulin levels, and shifts the body’s metabolism away from carbs and towards fat and ketones.</p>
            </div>
          </div>
        </div>

        <div class = "yaason">
          <div class="slidewrap2">
            <img src="ches.png" class="pika"/>
            <div id="slide2">
              <p>The big gay cheese?</p>
            </div>
          </div>
        </div>
      </div>

        <footer>
          <p>Crevice Co ®</p>
        </footer>
      </div>
    );
  }
}

export default Landing;
