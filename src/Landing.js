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
      atkinsInfo: false,
      rawInfo: false,
      juiceInfo: false,
      fatInfo: false,

      ketoWheel: false,
      veganWheel: false,
      rawWheel: false,
      atkinsWheel: false,
      juiceWheel: false,
      fatwheel: false,
    };
    this.wheelClick = this.wheelClick.bind(this);
    this.wheelExit = this.wheelExit.bind(this);
    this.ketoClick = this.ketoClick.bind(this);
    this.veganClick = this.veganClick.bind(this);
    this.rawClick = this.rawClick.bind(this);
    this.atkinsClick = this.atkinsClick.bind(this);
    this.juiceClick = this.juiceClick.bind(this);
    this.fatClick = this.fatClick.bind(this);

    this.toVeg = this.toVeg.bind(this);
    this.toKeto = this.toKeto.bind(this);
    this.toRaw = this.toRaw.bind(this);
    this.toAtkins = this.toAtkins.bind(this);
    this.toJuice = this.toJuice.bind(this);
    this.toFat = this.toFat.bind(this);
  }

  wheelClick() {
    var maxNumber = 6;
    var randomNumber = Math.floor((Math.random() * maxNumber) + 1);
    let choice = randomNumber;
    if (choice === 1 )
    {
      this.setState({
        ketoWheel: !this.state.ketoWheel
      });
    }
    else if (choice === 2)
    {
      this.setState({
        veganWheel: !this.state.veganWheel
      })
    }
    else if (choice === 3)
    {
      this.setState({
        rawWheel: !this.state.rawWheel
      })
    }
    else if (choice === 4)
    {
      this.setState({
        atkinsWheel: !this.state.atkinsWheel
      })
    }
    else if (choice === 5)
    {
      this.setState({
        juiceWheel: !this.state.juiceWheel
      })
    }
    else if (choice === 6)
    {
      this.setState({
        fatWheel: !this.state.fatWheel
      })
    };
  }

  wheelExit() {
    if (this.state.ketoWheel === true) {
      this.setState({
        ketoWheel: !this.state.ketoWheel
      });
    }
    if (this.state.veganWheel === true) {
      this.setState({
        veganWheel: !this.state.veganWheel
      });
    }
    if (this.state.rawWheel === true) {
      this.setState({
        rawWheel: !this.state.rawWheel
      });
    }
    if (this.state.atkinsWheel === true) {
      this.setState({
        atkinsWheel: !this.state.atkinsWheel
      });
    }
    if (this.state.juiceWheel === true) {
      this.setState({
        juiceWheel: !this.state.juiceWheel
      });
    }
    if (this.state.fatWheel === true) {
      this.setState({
        fatWheel: !this.state.fatWheel
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

  rawClick() {
    this.setState({
      rawInfo: !this.state.rawInfo

    });
  }

  atkinsClick() {
    this.setState({
      atkinsInfo: !this.state.atkinsInfo

    });
  }

  juiceClick() {
    this.setState({
      juiceInfo: !this.state.juiceInfo

    });
  }

  fatClick() {
    this.setState({
      fatInfo: !this.state.fatInfo

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

  toRaw(){
    var jump = document.getElementById("rawSlide");
    jump.scrollIntoView({block: "start", behavior: "smooth"});
  }

  toAtkins(){
    var jump = document.getElementById("atkinsSlide");
    jump.scrollIntoView({block: "start", behavior: "smooth"});
  }

  toJuice(){
    var jump = document.getElementById("juiceSlide");
    jump.scrollIntoView({block: "start", behavior: "smooth"});
  }

  toFat(){
    var jump = document.getElementById("fatSlide");
    jump.scrollIntoView({block: "start", behavior: "smooth"});
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
          <li onClick={this.toRaw}> Raw Food </li>
          <li onClick={this.toAtkins}> Atkins </li>
          <li onClick={this.toJuice}> Juicing </li>
          <li onClick={this.toFat}> Treat yo self</li>
              </ul>
            </div>
          </div>

        <button class="wheel" onClick={this.wheelClick}>
          What diet should we do today?
        </button>
        {this.state.ketoWheel ?
          <Popup
            text='Do the Keto diet today'
            name="Keto"
            closePopup={this.wheelExit.bind(this)}
            />
          : null
        }
        {this.state.veganWheel ?
          <Popup
            text='Do the Vegan diet today'
            closePopup={this.wheelExit.bind(this)}
            />
          : null
        }
        {this.state.rawWheel ?
          <Popup
            text='Do the Raw Food diet today'
            closePopup={this.wheelExit.bind(this)}
            />
          : null
        }
        {this.state.atkinsWheel ?
          <Popup
            text='Do the Atkins diet today'
            closePopup={this.wheelExit.bind(this)}
            />
          : null
        }
        {this.state.juiceWheel ?
          <Popup
            text='Do the Juicer diet today'
            closePopup={this.wheelExit.bind(this)}
            />
          : null
        }
        {this.state.fatWheel ?
          <Popup
            text='CHEAT DAY'
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
                text='keto'
                name='Keto'
                content='ketofoods.jpg'
                contentLink="https://www.healthline.com/nutrition/ketogenic-diet-foods"
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
              Juice fasting is also referred to as juice cleansing. Many people who undergo a juice fast aren’t just trying to lose weight, they’re also looking to beef up the nutrients in their bodies.
              Juicing is a process that extracts the juices from whole fruits and vegetables. What’s missing from juice is the fiber that’s found in the pulp.
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
          <a className="popinfo" href={this.props.contentLink} target="_blank">
            Learn more about {this.props.name}
          </a>
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
