import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';

class TheDropdown extends Component {
    state = {
        size : " فری سایز (44-40) "
    }
   

     

     handler = (thesize) => {
        this.setState({size : thesize})
        console.log(this.state.size)
    }
   
   
    render() {
        return (
            <div style={{ direction: "rtl" }}>
                <h6>اندازه: {this.state.size}</h6>
                <Dropdown>
                    <Dropdown.Toggle style={{ border: "1px solid", height: "50px", fontSize: "14px" , marginTop: "10px" }} variant="white" id="dropdown-basic">
                        {this.state.size} &nbsp;
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item id='1' onClick={() => this.handler(document.getElementById("1").textContent)} href="#/action-1">فری سایز (44-40)  &nbsp;</Dropdown.Item>
                        <Dropdown.Item id='2' onClick={() => this.handler(document.getElementById("2").textContent)} href="#/action-2">فری سایز (40-36)  &nbsp;</Dropdown.Item>
                        <Dropdown.Item id='3' onClick={() => this.handler(document.getElementById("3").textContent)} href="#/action-3">فری سایز (50-44)  &nbsp;</Dropdown.Item>
                        <Dropdown.Item id='4' onClick={() => this.handler(document.getElementById("4").textContent)} href="#/action-4">فری سایز (36-32)  &nbsp;</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
        );
    }
}

export default TheDropdown;