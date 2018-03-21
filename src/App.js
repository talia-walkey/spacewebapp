import React, { Component } from 'react';
import './App.css';
import Chat from './comp/chat.js';
import Sticker from './comp/Stickers.js';
import Cards from './comp/Cards.js';
import Maze from './comp/Maze.js';
import WebFont from 'webfontloader';
import mySocket from "socket.io-client";
import arcadebg from './img/ArcadeBG.svg';


WebFont.load({
  google: {
    families: ['Titillium Web:300,400,700', 'sans-serif']
  }
});

class App extends Component {
    constructor(props){
        super(props);
        
        this.state={
            bio:0,
            tab: 0
        };
        
        this.showAlynna=this.showAlynna.bind(this);
        this.showTalia=this.showTalia.bind(this);
        this.exit=this.exit.bind(this);
        
        this.startChat=this.startChat.bind(this);
        this.startSticker=this.startSticker.bind(this);
        this.startCards=this.startCards.bind(this);
        this.startMaze=this.startMaze.bind(this);
    }
    
    showAlynna(){
        this.setState({
            bio:1
        })
    }
    
    showTalia(){
        this.setState({
            bio:2
        })
    }
    
    exit(){
        this.setState({
            bio:0
        })
    }    
    
    startChat(){
        this.setState({
            tab:1
        })
    }
    
    startSticker(){
        this.setState({
            tab:2
        })
    }
    
    startCards(){
        this.setState({
            tab:3
        })
    }
    
    startMaze(){
        this.setState({
            tab:4
        })
    }    
    
  render() {
      var bio=null;
      
      if(this.state.bio == 1){
          bio = (
            <div className="modal">
                <img src={require('./img/exit.png')} className="exit" onClick={this.exit} /><br/>
                <img src={require('./img/alynna.jpg')} className="bioImg" />
                <h1>Alynna Alcira</h1>
                <p>I am an aspiring UX/UI designer currently studying Digital Design and Development at BCIT. I am a creative and quality driven individual, motivated to create new user experiences. I love to bring my ideas to life, either through graphics and/or websites.</p>
            </div>
          )
      } else if(this.state.bio == 2) {
          bio = (
            <div className="modal">
                <img src={require('./img/exit.png')} className="exit" onClick={this.exit}/><br/>
                <img src={require('./img/talia.png')} className="bioImg" />
                <h1>Talia Walkey</h1>
                <p>I am a marker, developer, and designer with a Digital Design and Development Diploma from British Columbia Institute of Technology! I have skills in everything from design to development of web and mobile applications as well as I have learned the business skills to market them. </p>
            </div>
          )          
      } else {
          bio = null;
      }      
      
      var comp=null;
      if(this.state.tab ===0){
          comp=(
          <div>
                <div className="bios">
                    <button className="btn-bio abio" onClick={this.showAlynna}>Read Bio</button>
                    <img src={require("./img/logo.svg")} className="logo"/>
                    <button className="btn-bio tbio" onClick={this.showTalia}>Read Bio</button>
                </div>
                <div>
                {bio}
      
                    <div className="games">
                        <button id="chatButton" className="btn chatBtn" onClick={this.startChat}>Play Chat</button>
      
                        <button id="mazeButton" className="btn mazeBtn" onClick={this.startMaze}>Play Maze</button>
      
                        <button id="cardsButton" className="btn cardsBtn" onClick={this.startCards}>Play Cards</button>
      
                        <button id="stickerButton" className="btn stickerBtn" onClick={this.startSticker}>Play Stickers</button>
      
                        <img src={arcadebg} class="arcadebg"/>
                    </div>
                </div>
          </div>
        
      )
      }else if(this.state.tab ===1){
          comp=(
          <div>
            <div id="topPage">
                <img src={require('./Image/background.svg')} id="bkgImg" />
                <div id="welcome" className="nameHeading" id="welcomeDiv">Time to Chat!</div>
            </div>
                    
        <div id="chatDiv">
            <Chat/>
        </div>
                
          </div>
      )
      }else if(this.state.tab ===2){
          comp=(
                <div id="chatDiv">
                    <Sticker/>
                </div>
            )
      }else if(this.state.tab ===3){
          comp=(
                <div id="chatDiv">
                    <Cards/>
                </div>
            )
      }else if(this.state.tab ===4){
          comp=(
                <div id="chatDiv">
                    <Maze/>
                </div>
            )
      }

    return (
      <div className="App">
            {comp}
      </div>
    );
  }
}

export default App;
