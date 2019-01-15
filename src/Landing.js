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
      ketoInfo: false,
      veganInfo: false,

      ketoWheel: false,
    };
    this.wheelClick = this.wheelClick.bind(this);
    this.wheelExit = this.wheelExit.bind(this);
    this.ketoClick = this.ketoClick.bind(this);
    this.veganClick = this.veganClick.bind(this);
    this.toVeg = this.toVeg.bind(this);
    this.toKeto = this.toKeto.bind(this);
  }

  wheelClick() {
    var maxNumber = 3;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    let choice = randomNumber;
    if (choice === 1 )
    {
      this.setState({
        ketoWheel: !this.state.ketoWheel
      });
    };

  }

  wheelExit() {
    if (this.state.ketoWheel === true) {
      this.setState({
        ketoWheel: !this.state.ketoWheel
      });
    }
  }

  ketoClick() {
    this.setState({
      ketoInfo: !this.state.ketoInfo

    });
  }

  veganClick() {
    this.setState({
      veganInfo: !this.state.veganInfo

    });
  }

  toggleModal() {
    this.setState({
      ketoInfo: !this.state.ketoInfo
    });
  }

  toKeto(){
    var jump = document.getElementById("ketoSlide");
    jump.scrollIntoView({block: "start", behavior: 'smooth'});
  }
  toVeg(){
    var jump = document.getElementById("veganSlide");
    jump.scrollIntoView({block: "start", behavior: 'smooth'});
  }

  render() {
    return (
      <div class = "app">
        <link href="https://fonts.googleapis.com/css?family=Indie+Flower" rel="stylesheet"/>

        <meta name="viewport" content="width=device-width, initial-scale=1"/>

        <div class="floathead">
          <p>Welcome to the Crevice Diet World </p>

          <div class="dropdown">
          <ul class="drop">Menu</ul>
            <div class = "drop_content">
              <ul>
          <li onClick={this.toKeto}> Keto </li>
          <li onClick={this.toVeg} > Vegetarian </li>
          <li>Nyes</li>
              </ul>
            </div>
          </div>

        <button class="wheel" onClick={this.wheelClick}>
          What diet should we do today?
        </button>
        {this.state.ketoWheel ?
          <Popup
            text='Do the Keto diet today'
            closePopup={this.wheelExit.bind(this)}
            />
          : null
        }
        </div>

      <div class="content">

        <div class = "yson" id="ketoSlide">
          <div class="slidewrap">
            <img src="fat.png" className="pika" onClick={this.ketoClick}/>
            <div id="slide">
              <p>The keto diet is a low-carb, high-fat diet. It lowers blood sugar and insulin levels, and shifts the body’s metabolism away from carbs and towards fat and ketones.</p>
            </div>
            <div>
            {this.state.ketoInfo ?
              <Popup
                text='Boots'
                content='wow.png'
                closePopup={this.ketoClick.bind(this)}
              />
              : null
            }
           </div>
          </div>
        </div>

        <div class = "yaason" id="veganSlide">
          <div class="slidewrap2">
            <img src="ches.png" class='cheese' onClick={this.veganClick}/>
            <div id="slide2">
              <p>A vegan diet excludes all animal products. Many people choose to eat this way for ethical, environmental or health reasons.</p>
            </div>
            <div>
            {this.state.veganInfo ?
              <Popup
                text='Vegan'
                closePopup={this.veganClick.bind(this)}
              />
              : null
            }
           </div>
          </div>
        </div>



      <div class = "yason" id="rawSlide">
        <div class="slidewrap">
          <img src="fat.png" class="pika" onClick={this.rawClick}/>
          <div id="slide">
            <p>
              The raw diet is what you'd expect it to be: all raw foods, meaning it has never been heated over 104–118°F (40–48°C) and has not been processed in anyway.
              Its supporters believe that consuming mostly raw foods is ideal for human health and has many benefits, including weight loss and better overall health.
            </p>
          </div>
          <div>
          {this.state.rawInfo ?
            <Popup
              text='raw'
              closePopup={this.rawClick.bind(this)}
            />
            : null
          }
         </div>
        </div>
      </div>

      <div class = "yaason" id='atkinsSlide'>
        <div class="slidewrap2">
          <img src="ches.png" class='cheese' onClick={this.atkinsClick}/>
          <div id="slide2">
            <p>
              The Atkins diet is a low-carb diet, usually recommended for weight loss.
              Proponents of this diet claim that you can lose weight while eating as much protein and fat as you want, as long as you avoid foods high in carbs.
            </p>
          </div>
          <div>
          {this.state.atkinsInfo ?
            <Popup
              text='Atkins'
              closePopup={this.atkinsClick.bind(this)}
            />
            : null
          }
         </div>
        </div>
      </div>

      <div class = "yason" id="juiceSlide">
        <div class="slidewrap">
          <img src="fat.png" class="pika" onClick={this.juiceClick}/>
          <div id="slide">
            <p>

            </p>
          </div>
          <div>
          {this.state.juiceInfo ?
            <Popup
              text='juice'
              closePopup={this.juiceClick.bind(this)}
            />
            : null
          }
         </div>
        </div>
      </div>

      <div class = "yaason" id='fatSlide'>
        <div class="slidewrap2">
          <img src="ches.png" class='cheese' onClick={this.fatClick}/>
          <div id="slide2">
            <p>
              Treat yo self.
            </p>
          </div>
          <div>
          {this.state.fatInfo ?
            <Popup
              text='fat'
              closePopup={this.fatClick.bind(this)}
            />
            : null
          }
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

class Popup extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return(
      <div className='popup'>
        <div className='popup_inner' onMouseLeave={this.props.closePopup}>
          <h1>
            {this.props.text}
          </h1>
          <img src={this.props.content} id="popimg"></img>
        </div>
      </div>
    );
  }
}




// this.handleClick = this.handleClick.bind(this);
// this.state = {
//   visible: true
// };

// handleClick() {
//   if (!this.state.visible) {
//     document.addEventListener('click', this.handleOutsideClick, false);
//   }
//   else {
//     document.removeEventListener('click', this.handleOutsideClick, false);
//   };
//
//   this.setState(prevState => ({
//     visible: !prevState.visible
//   }));
// }
//
// handleOutsideClick(e) {
//   if (this.node.contains(e.target)) {
//     return;
//   }
//   this.handleClick();
// }
