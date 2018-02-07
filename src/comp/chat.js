import React, { Component } from 'react';
import mySocket from 'socket.io-client';

class Chat extends Component {
    constructor(props){
        super(props);
        
        this.state={
            myname:"",
            mode:0,
            allnames:[],
            allmsgs:[],
            mymsg:""
        }
        
        this.joinChat=this.joinChat.bind(this);
        this.handleName=this.handleName.bind(this);
        this.handleMyMsg=this.handleMyMsg.bind(this);
        this.sendMsg=this.sendMsg.bind(this);
    }
    
    componentDidMount(){
       //this.socket=mySocket("https://spacesockets.herokuapp.com/");
    }
    
    joinChat(){
        this.setState({
            mode:1
        })
        this.socket =mySocket("https://spacesockets.herokuapp.com/");
            //send the username entered in the input to the socket server
        this.socket.emit("uname", this.state.myname);
        this.socket.on("names", (data)=>{
            this.setState({
                allnames:data
            });
        });
        this.socket.on("msgs",(data)=>{
           this.setState({
               allmsgs:data
           }); 
        });
    }
    
    handleName(evt){
        this.setState({
            myname:evt.target.value
        })    
    }
    
    handleMyMsg(evt){
        this.setState({
            mymsg:evt.target.value
        })
    }
    sendMsg(){
        var msg = this.state.myname+": "+this.state.mymsg;
        //Henry: Hi
        
        this.socket.emit("sendmsg", msg);
    }
    
  render() {
      var comp = null;
      if(this.state.mode===0){
          comp = (
                <div class="chatBox">
                    <input 
                        onChange={this.handleName}
                        type="text" 
                        placeholder="type in your username"
                    />
                    <button onClick={this.joinChat}>
                        Join Chat
                    </button>
                </div>
          );
      }else if(this.state.mode===1){
          
          var allmsgs = this.state.allmsgs.map((obj,i)=>{
             return(
                <div key={i}>
                 {obj}
                </div>
             ) 
          })
          
          comp=(
                <div class="chatBox">
                    <div id="chatDisplay">{allmsgs}</div>
                    <div id="controls">
                        <input 
                            type="text" 
                            placeholder="type your message here" 
                            onChange={this.handleMyMsg}/>
                        <button 
                            onClick={this.sendMsg}
                        >Send</button>
                    </div>
                </div>
          );
      }
      
      var allnames = this.state.allnames.map((obj, i)=>{
          return(
                <div key={i}>
                    {obj}
                </div>
          )
      })
      
    return (
        <div className="App">
            {comp}
            <div id="allNames">
                People who are online <hr/> 
                {allnames}
            </div>
        
        </div>
    );
  }
}

export default Chat;
