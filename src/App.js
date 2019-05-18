import React, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        this.addRoom = this.addRoom.bind(this);
        this.removeRoom = this.removeRoom.bind(this);
        this.validateRoomButton = this.validateRoomButton.bind(this);
        this.validateAdultButton = this.validateAdultButton.bind(this);

        this.state = {
            room: 'Room',
            adult: 'Adult',
            children: 'Children',
            roomCount: 1,
            adultCount: 1,
            childCount: 0,
            personAllowed: 1,
            maxLimit: 4,
            invalidRoomAdd: true,
            invalidRoomRemove: true,
            invalidAdultAdd: false,
            invalidAdultRemove: true,
            invalidChildAdd: false,
            invalidChildRemove: true

        }
    }


    validateRoomButton() {
        if (this.state.personAllowed < this.state.maxLimit) {
            this.setState({
                invalidRoomAdd: true
            })
        }
        if (this.state.personAllowed === this.state.maxLimit  && this.state.roomCount < 5) {
            this.setState({
                invalidRoomAdd: false
            })
        }
        if (this.state.roomCount > 1) {
            this.setState({
                invalidRoomRemove: false
            })
        }
        if (this.state.personAllowed >= ((this.state.roomCount - 1) * 4 + 1)) {
            this.setState({
                invalidRoomRemove: true
            })
        }
    }
    validateAdultButton() {
        if (this.state.personAllowed >= this.state.maxLimit) {
            this.setState({
                invalidAdultAdd: true,
                invalidChildAdd: true,
            })
        }
        if (this.state.personAllowed < this.state.maxLimit) {
            this.setState({
                invalidAdultAdd: false,
                invalidChildAdd: false,
            })
        }
        if (this.state.adultCount || this.state.adultCount < ((this.state.roomCount - 1) * 4) + 1) {
            this.setState({
                invalidAdultRemove: true,
            })
        }
        if ( this.state.adultCount > 1) {
            this.setState({
                invalidAdultRemove: false,
            })
        }
        if (this.state.childCount > (this.state.roomCount - 1) * 4 || this.state.childCount > 0) {
            this.setState({
                invalidChildRemove: false,
            })
        }
        if (this.state.childCount === 0) {
            this.setState({
                invalidChildRemove: true,
            })
        }
        if (this.state.adultCount === this.state.roomCount) {
            this.setState({
                invalidAdultRemove: true,
            })
        }

    }



    addRoom(param, e) {
        if (param === 'room') {
            this.setState({
                roomCount: this.state.roomCount < 5 ? this.state.roomCount += 1 : this.state.roomCount,
                adultCount: this.state.adultCount += 1,
                personAllowed: this.state.personAllowed += 1,
                maxLimit: this.state.maxLimit += 4
            });
        }
        if (param === 'adult') {
            this.setState({
                personAllowed: this.state.personAllowed < this.state.maxLimit ? this.state.personAllowed += 1 : this.state.personAllowed,
                adultCount: this.state.personAllowed <= this.state.maxLimit ? this.state.adultCount += 1 : this.state.adultCount,

            });
        }
        if (param === 'child') {
            this.setState({
                personAllowed: this.state.personAllowed < this.state.maxLimit ? this.state.personAllowed += 1 : this.state.personAllowed,
                childCount: this.state.personAllowed - 1 < this.state.maxLimit ? this.state.childCount += 1 : this.state.childCount,
            });
        }
        this.validateRoomButton();
        this.validateAdultButton();
    }

    removeRoom(param, e) {
        if (param === 'room') {
            this.setState({
                roomCount: this.state.roomCount < 2 ? this.state.roomCount : this.state.roomCount -= 1,
                maxLimit: this.state.maxLimit -= 4
            });
        }
        if (param === 'adult') {
            this.setState({
                personAllowed: this.state.personAllowed -= 1,
                adultCount: this.state.adultCount < 2 ? 1 : this.state.adultCount -= 1
            });
        }
        if (param === 'child') {
            this.setState({
                personAllowed: this.state.personAllowed -= 1,
                childCount: this.state.childCount < 1 ? 0 : this.state.childCount -= 1
            });
        }
        this.validateRoomButton();
        this.validateAdultButton();
    }


    render() {
        return (
            <div>

            <h4>Innoventes Technologies India Private Ltd </h4>

             <i class="fas fa-users fa-min"></i>Choose no of people
       
            <table class="table table-bordered">
                <tbody>
                    <tr>
                        <td><i class="fas fa-bed fa-min"></i> {this.state.room} </td>                        
                        <td className="app-td">
                            <button className={"fas fa-minus-circle" + (this.state.invalidRoomRemove ? ' fa-min-fad' : ' fa-min') } onClick={this.removeRoom.bind(this, 'room')} disabled={this.state.invalidRoomRemove} ></button>
                                 {this.state.roomCount}
                            <button  className={"fas fa-plus-circle" + (this.state.invalidRoomAdd ? ' fa-add-fad' : ' fa-add') } onClick={this.addRoom.bind(this, 'room')} disabled={this.state.invalidRoomAdd} ></button>
                        </td>
                    </tr>

                    <tr>
                        <td><i class="fas fa-user-alt fa-min"></i> {this.state.adult}</td>                        
                        <td className="app-td">
                            <button  className={"fas fa-minus-circle" + (this.state.invalidAdultRemove ? ' fa-min-fad' : ' fa-min') }  onClick={this.removeRoom.bind(this, 'adult')} disabled={this.state.invalidAdultRemove} ></button>
                                 {this.state.adultCount}
                            <button className={"fas fa-plus-circle" + (this.state.invalidAdultAdd ? ' fa-add-fad' : ' fa-add') } onClick={this.addRoom.bind(this, 'adult')} disabled={this.state.invalidAdultAdd} ></button>
                        </td>
                    </tr>

                    <tr>
                        <td><i class="fas fa-child  fa-min"></i> {this.state.children}</td>
                        <td className="app-td">
                            <button  className={"fas fa-minus-circle" + (this.state.invalidChildRemove ? ' fa-min-fad' : ' fa-min') }  onClick={this.removeRoom.bind(this, 'child')} disabled={this.state.invalidChildRemove} ></button>
                             {this.state.childCount}
                            <button className={"fas fa-plus-circle" + (this.state.invalidChildAdd ? ' fa-add-fad' : ' fa-add') }  onClick={this.addRoom.bind(this, 'child')} disabled={this.state.invalidChildAdd}></button>
                        </td>
                    </tr>
                    
                </tbody>
            </table>
            </div>
        );
    }
}

export default App;