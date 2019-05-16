import React, { Component } from 'react'
import '../App.css';


class Room extends Component {
    constructor(props) {
        super(props);
        
    }
    render() { 
        return (
            <tr>
                <td><i class="fas fa-bed fa-min"></i> {this.state.room} </td>                        
                <td className="app-td">
                    <button className={"fas fa-minus-circle" + (this.state.invalidRoomRemove ? ' fa-min-fad' : ' fa-min') } onClick={this.removeRoom.bind(this, 'room')} disabled={this.state.invalidRoomRemove} ></button>
                         {this.state.roomCount}
                    <button  className={"fas fa-plus-circle" + (this.state.invalidRoomAdd ? ' fa-add-fad' : ' fa-add') } onClick={this.addRoom.bind(this, 'room')} disabled={this.state.invalidRoomAdd} ></button>
                </td>
            </tr>
             );
    }
}
 
export default Room;