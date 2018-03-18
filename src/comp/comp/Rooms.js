import React, { Component } from 'react';
import '../App.css';

class Rooms extends Component {
    constructor(props){
        super(props);
    }
    
    
    render() {
            
        return (
            <div className="RoomsBG">
                <button onClick={this.props.handleDisplay.bind(this, 'room1')} className="btn">Room1</button>
                <button onClick={this.props.handleDisplay.bind(this, 'room2')} className="btn">Room2</button>
                <button onClick={this.props.handleDisplay.bind(this, 'room3')} className="btn">Room3</button>
                <button onClick={this.props.handleDisplay.bind(this, 'room4')} className="btn">Room4</button>
                <button onClick={this.props.handleDisplay.bind(this, 'room5')} className="btn">Room5</button>
            </div>
        );
    }
}

export default Rooms;
