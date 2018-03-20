import React, { Component } from 'react';
import './Cards.css';
import mySocket from 'socket.io-client';

class Test extends Component {
    constructor(props){
        super(props);
        
        this.state = {
            screen:0,
            host:null,
            question:null,
            ansObj:{a1:null, a2:null},
            allAnswers:[],
            winner:"",
            bestAnswer:null,
            status:{host:"waiting for players then start the game!", 
                    player:"waiting for host to start game..."}
        }
        
    }
    
    componentDidMount(){
        this.socket = mySocket("https://cards-sockets.herokuapp.com/");
        
        //when sockets receive new question
        this.socket.on("newq", (data)=>{
           this.setState({
               question: data
           })
        });
        
        //when sockets receives chosen answers
        this.socket.on("showAnswers", (data)=>{
            this.setState({
                allAnswers:data
            })
        });
        
        //when sockets receives winning answer
        this.socket.on("bestAnswer", (data)=>{
            this.setState({
                bestAnswer:data
            })
        });
        
        var answersArr = [
            "BCIT SE14.",
            "Dov's Leadership Prayer Breakfast.",
            "Bitches.",
            "Henry with his new xbox.",
            "Crippling student loan debt."
        ]
        
        var answersArr2 = [
            "Farting and walking away.",
            "Nicolas Cage.",
            "The wrath of Daemon.",
            "Puppies!",
            "Ramin's Pinterest quotes."
        ]
        
        var ansObj = {
            a1:answersArr[Math.floor(Math.random()*answersArr.length)],
            a2:answersArr2[Math.floor(Math.random()*answersArr2.length)]
        }
        
        console.log("answer1: "+ansObj.a1);
        console.log("answer2: "+ansObj.a2);
        
        this.setState({
            ansObj:{a1: ansObj.a1, a2: ansObj.a2}
        })
    }
    
    handleRoom=(roomStr)=>{
        this.setState({
            screen:1
        });
        
        this.socket.emit("joinroom", roomStr);
    }    
    
    handleQ=()=>{
        var questionsArr = [
            "I drink to forget _____.",
            "The class field trip was completely ruined by _____.",
            "What's my secret power?",
            "A romantic, candlelit dinner would be incomplete without _____.",
            "_____ is how I want to die"
        ];
        
        var question = questionsArr[Math.floor(Math.random()*questionsArr.length)];
        console.log("question: "+ question);
        
        //msg to send server
        this.socket.emit("qsubmit", question);
        
        //clears out previous data when a new game starts
        this.setState({
            allAnswers:[],
            bestAnswer:"",
            status:{host:"wait for players to choose their answers..."}
        })
    }
    
    handleA=(chosen)=>{
        if (chosen == "a1"){
            this.socket.emit("chosenAnswer", this.state.ansObj.a1);
        } else if (chosen == "a2"){
            this.socket.emit("chosenAnswer", this.state.ansObj.a2);
        }
        
        //updates the status
        this.setState({
            status:{player:"wait for host to choose the best answer..."}
        })
    }
    
    handleHost=(isHost)=>{
        this.setState({
            screen:2,
            host:isHost
        })
    }
    
    pickWinner=(winner)=>{
        this.setState({
            winner:winner
        })
        
        var winner = this.state.allAnswers[this.state.winner];
        console.log("winner: "+winner);
        
        this.socket.emit("winner", winner);
    }

  render() {
      
      var comp = null;    
      
      if (this.state.screen == 0){
          comp = (
            <div>
                <button onClick={this.handleRoom.bind(this, "room1")}>Room 1</button>
                <button onClick={this.handleRoom.bind(this, "room2")}>Room 2</button>
            </div>
          )
      } else if (this.state.screen == 1){
        comp = (
            <div>
                <button onClick={this.handleHost.bind(this,true)}>Host</button>
                <button onClick={this.handleHost.bind(this,false)}>Player</button>
            </div>
          )   
      } else if (this.state.screen == 2){
          if (this.state.host == true){
            
                var allUsers = this.state.allAnswers.map((obj, i)=>{
                    return (
                        <button key={i} className="whiteCard" onClick={this.pickWinner.bind(this, i)}>{this.state.allAnswers[i]}</button>
                    )
                });     
              
              comp = (
                <div>HOST<br/>
                    Status: {this.state.status.host}<br/><br/>
                    <button onClick={this.handleQ} className="btn">Start Game</button> <br/>

                    <hr/>
                    
                    <br/>Prompt: <br/>
                    <div className="blackCard">  
                        {this.state.question}
                    </div>
                    <br/>
                    <div>Chosen Answers:<br/><br/>
                        {allUsers}
                    </div>
                    <div>The winner:<br/>
                        <div className="winningCard">{this.state.bestAnswer}</div>
                    </div>
                </div>
              )
          } else if (this.state.host == false){
              comp = (
                <div>PLAYER<br/>
                    Status: {this.state.status.player}
                    <hr/>
                        Prompt:<br/>
                    <div className="blackCard">
                        {this.state.question}
                    </div>
                    <br/><br/>Options:<br/>
                    <button className="whiteCard" onClick={this.handleA.bind(this, "a1")}>{this.state.ansObj.a1}</button>
                    <button className="whiteCard" onClick={this.handleA.bind(this, "a2")}>{this.state.ansObj.a2}</button>
                    <div>The winner:<br/>
                        <div className="winningCard">{this.state.bestAnswer}</div>
                    </div>
                </div>  
              )
          }
      }
      
    return (
      <div className="App">
        {comp}
      </div>
    );
  }
}

export default Test;
