import React, { Component } from 'react';
import './Maze.css';
import mySocket from 'socket.io-client';

class App extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            room:-1,
            chosenFruit:'',
            showFruit:-1,
            allnames:[],
            theFruit: '',
            myname: 'N/A'
        };
        
        this.handleRoom1 = this.handleRoom1.bind(this);
        this.handleRoom2 = this.handleRoom2.bind(this);
        this.handleRed = this.handleRed.bind(this);
        this.handleYellow = this.handleYellow.bind(this);
        this.handleBlue = this.handleBlue.bind(this);
        this.handleOrange = this.handleOrange.bind(this);
        this.handlePink = this.handlePink.bind(this);
        this.handleGreen = this.handleGreen.bind(this);
        this.handleBack = this.handleBack.bind(this);
        this.handleHost = this.handleHost.bind(this);
        this.handlePlayer = this.handlePlayer.bind(this);
        
        this.hostCherry = this.hostCherry.bind(this);
        this.hostStrawberry = this.hostStrawberry.bind(this);
        this.hostLemon = this.hostLemon.bind(this);
        this.hostBanana = this.hostBanana.bind(this);
        this.hostBlueberry = this.hostBlueberry.bind(this);
        this.hostPlum = this.hostPlum.bind(this);
        this.hostOrange = this.hostOrange.bind(this);
        this.hostCarrot = this.hostCarrot.bind(this);
        this.hostPeach = this.hostPeach.bind(this);
        this.hostGrapefruit = this.hostGrapefruit.bind(this);
        this.hostApple = this.hostApple.bind(this);
        this.hostKiwi = this.hostKiwi.bind(this);
        
        this.handleCherry = this.handleCherry.bind(this);
        this.handleStrawberry = this.handleStrawberry.bind(this);
        this.handleLemon = this.handleLemon.bind(this);
        this.handleBanana = this.handleBanana.bind(this);
        this.handleBlueberry = this.handleBlueberry.bind(this);
        this.handlePlum = this.handlePlum.bind(this);
        this.handleorange = this.handleorange.bind(this);
        this.handleCarrot = this.handleCarrot.bind(this);
        this.handlePeach = this.handlePeach.bind(this);
        this.handleGrapefruit = this.handleGrapefruit.bind(this);
        this.handleApple = this.handleApple.bind(this);
        this.handleKiwi = this.handleKiwi.bind(this);
        
        this.handleName=this.handleName.bind(this);
        this.addName=this.addName.bind(this);
        
        this.chooseFruit = this.chooseFruit.bind(this);
    }
    
    componentDidMount(){
        this.socket= mySocket('https://maze-sockets.herokuapp.com/');
     
        this.socket.on('chosenFruit', (data=>{
            this.setState({
                theFruit:data
            })
        }))
        
        this.socket.on('theWinner', (data=>{
            alert('The winner is '+ data + '. '+ data + 'found the ' + this.state.theFruit);
            
            console.log('the winner is '+ data);
        }))
    }
    
    handleRoom1(){
        this.setState({
            room:1
        })
    }
    
    handleRoom2(){
        this.setState({
            room:2
        })
    }
    
    handleRed(){
        this.setState({
            room:3
        })
    }
    
    handleYellow(){
        this.setState({
            room:4
        })
    }
    
    handleBlue(){
        this.setState({
            room:5
        })
    }
    
    handleOrange(){
        this.setState({
            room:6
        })
    }
    
    handlePink(){
        this.setState({
            room:7
        })
    }
    
    handleGreen(){
        this.setState({
            room:8
        })
    }
    
    handleBack(){
        this.setState({
            room:50
        })
    }
    
    handleHost(){
        this.setState({
            room:9
        })
    }
    
    handlePlayer(){
        this.setState({
            room:0
        })
    }
    
    handleName(evt){
        this.setState({
            myname: evt.target.value
        })
        
    }
    
    addName(data){
        this.socket.emit('uname', this.state.myname);
        
        this.setState({
            room:50
        })
        /*this.socket.on('allnames', (data=>{
            this.setState({
                allnames:data
            })
        }))
        console.log(this.state.allnames);*/
    }
    
    hostCherry(){
        this.setState({
            chosenFruit: './imgs/cherry.png'
        })
    }
    
    chooseFruit(data){
        this.socket.emit('chosenF', this.state.chosenFruit);
        
        this.setState({
            room: 51
        })
    }
    
    
    hostStrawberry(){
        this.setState({
            chosenFruit: './imgs/strawberry.png'
        })
    }
    
    hostLemon(){
        this.setState({
            chosenFruit: './imgs/lemon.png'
        })
    }
    
    hostBanana(){
        this.setState({
            chosenFruit: './imgs/banana.png'
        })
    }
    
    hostBlueberry(){
        this.setState({
            chosenFruit: './imgs/blueberry.png'
        })
    }
    
    hostPlum(){
        this.setState({
            chosenFruit: './imgs/plum.png'
        })
    }
    
    hostOrange(){
        this.setState({
            chosenFruit: './imgs/orange.png'
        })
    }
    
    hostCarrot(){
        this.setState({
            chosenFruit: './imgs/carrot.png'
        })
    }
    
    hostPeach(){
        this.setState({
            chosenFruit: './imgs/peach.png'
        })
    }
    
    hostGrapefruit(){
        this.setState({
            chosenFruit: './imgs/grapefruit.png'
        })
    }
    
    hostApple(){
        this.setState({
            chosenFruit: './imgs/apple.png'
        })
    }
    
    hostKiwi(){
        this.setState({
            chosenFruit: './imgs/kiwi.png'
        })
    }
    
    handleCherry(){
        this.setState({
            showFruit: 0
        })
        
    }
    
    handleStrawberry(){
        this.setState({
            showFruit: 1
        })
        
    }
    
    handleLemon(){
        this.setState({
            showFruit: 2
        })
    }
    
    handleBanana(){
        this.setState({
            showFruit: 3
        })
    }
    
    handleBlueberry(){
        this.setState({
            showFruit: 4
        })
    }
    
    handlePlum(){
        this.setState({
            showFruit: 5
        })
    }
    
    handleorange(){
        this.setState({
            showFruit: 6
        })
    }
    
    handleCarrot(){
        this.setState({
            showFruit: 7
        })
    }
    
    handlePeach(){
        this.setState({
            showFruit: 8
        })
    }
    
    handleGrapefruit(){
        this.setState({
            showFruit: 9
        })
    }
    
    handleApple(){
        this.setState({
            showFruit: 10
        })
    }
    
    handleKiwi(){
        this.setState({
            showFruit: 11
        })
    }
    
  render() {
      var comp = null;
      
      if(this.state.room === -1){
          comp = (
                <div className="maze">
                    <button class='thebut' onClick={this.handleHost}>Host</button>
                    <button class='thebut' onClick={this.handlePlayer}>Player</button>
                </div>
          )
      }else if(this.state.room === 0){
          comp = (
                <div className="player">
                    <input className='nameinput' type='text' placeholder='Enter Your Name' onChange={this.handleName}/>
                    <button class='thebut' onClick={this.addName}>AddName</button>
              
                    {this.state.myname}
                </div>
          )
      }else if(this.state.room === 50){
          comp=(
                <div className="rooms">
                    <button class='thebut' onClick={this.handleRoom1}>Room 1</button>
                    <button class='thebut' onClick={this.handleRoom2}>Room 2</button>
                </div>
          )
          
      }else if (this.state.room === 1){
          comp = (
                <div className="ryb">
                    <button class='thebut' onClick={this.handleRed}>Red</button>
                    <button class='thebut' onClick={this.handleYellow}>Yellow</button>
                    <button class='thebut' onClick={this.handleBlue}>Blue</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 2){
          comp = (
                <div className="opg">
                    <button class='thebut' onClick={this.handleOrange}>Orange</button>
                    <button class='thebut' onClick={this.handlePink}>Pink</button>
                    <button class='thebut' onClick={this.handleGreen}>Green</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 3){
          comp = (
                <div className="red">
                    <button class='thebut' onClick={this.handleCherry}>Cherry</button>
                    <button class='thebut' onClick={this.handleStrawberry}>Strawberry</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 4){
          comp = (
                <div className="yellow">
                    <button class='thebut' onClick={this.handleLemon}>Lemon</button>
                    <button class='thebut' onClick={this.handleBanana}>Banana</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 5){
          comp = (
                <div className="blue">
                    <button class='thebut' onClick={this.handleBlueberry}>Blueberry</button>
                    <button class='thebut' onClick={this.handlePlum}>Plum</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 6){
          comp = (
                <div className="orange">
                    <button class='thebut' onClick={this.handleOrange}>Orange</button>
                    <button class='thebut' onClick={this.handleCarrot}>Carrot</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 7){
          comp = (
                <div className="pink">
                    <button class='thebut' onClick={this.handlePeach}>Peach</button>
                    <button class='thebut' onClick={this.handleGrapefruit}>Grapefruit</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 8){
          comp = (
                <div className="green">
                    <button class='thebut' onClick={this.handleApple}>Apple</button>
                    <button class='thebut' onClick={this.handleKiwi}>Kiwi</button>
                    <button class='thebut' onClick={this.handleBack}>Back to Start</button>
                </div>
          )
      }else if (this.state.room === 9){
          comp = (
                <div className="host">
                    <button class='thebut' onClick={this.chooseFruit}>Choose Fruit</button>
                    
                    <br/>
                    <br/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/cherry.png')} onClick={this.hostCherry}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/strawberry.png')} onClick={this.hostStrawberry}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/lemon.png')} onClick={this.hostLemon}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/banana.png')} onClick={this.hostBanana}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/blueberry.png')} onClick={this.hostBlueberry}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/plum.png')} onClick={this.hostPlum}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/orange.png')} onClick={this.hostOrange}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/carrot.png')} onClick={this.hostCarrot}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/peach.png')} onClick={this.hostPeach}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/grapefruit.png')} onClick={this.hostGrapefruit}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/apple.png')} onClick={this.hostApple}/>
              
                    <img alt='fruitimg' className='hostImg' src={require('./imgs/kiwi.png')} onClick={this.hostKiwi}/>
            
                </div>
          )
      }else if(this.state.room === 51){
          comp = (
                <div className="App">
                    <div>
                        <p>You chose to hide the {this.state.theFruit} in the game.</p>
              
                        <p> Lets see who wins! </p>
              
                </div>
                </div>
          )
      }
      
    if(this.state.theFruit === './imgs/cherry.png'){
        if(this.state.showFruit === 0){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/cherry.png')}/>
            )
            
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/strawberry.png'){
        if(this.state.showFruit === 1){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/strawberry.png')}/>
            )
            
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/lemon.png'){
        if(this.state.showFruit === 2){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/lemon.png')}/>
            )
            
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/banana.png'){
        if(this.state.showFruit === 3){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/banana.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/blueberry.png'){
        if(this.state.showFruit === 4){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/blueberry.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/plum.png'){
        if(this.state.showFruit === 5){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/plum.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/orange.png'){
        if(this.state.showFruit === 6){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/orange.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/carrot.png'){
        if(this.state.showFruit === 7){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/carrot.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/peach.png'){
        if(this.state.showFruit === 8){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/peach.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/grapefruit.png'){
        if(this.state.showFruit === 9){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/grapefruit.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/apple.png'){
        if(this.state.showFruit === 10){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/apple.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }else if(this.state.theFruit === './imgs/kiwi.png'){
        if(this.state.showFruit === 11){
            comp=(
                <img alt='fruitimg' className='hostImg' src={require('./imgs/kiwi.png')}/>
            )
            this.socket.emit('theWin', this.state.myname);
        }
    }

    return (
        <div>
            {comp}
        </div>
    );
  }
}

export default App;
