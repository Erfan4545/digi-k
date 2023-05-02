import React, { Component } from 'react'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import City from './city';
import Ostan from './ostan';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cities from '../files/cities.json';
class Location extends Component {
    state = { 
        city: [
        ]
        ,
        ostanName: ""
        ,
        showCityComponent: false
        ,
        showOstanComponent: true

     } 
  
    nextlevelhandler = (id) => {
         this.setState({ city: [cities.data.ostan[id].city] , ostanName: cities.data.ostan[id].title })
         this.setState({ showOstanComponent: !this.state.showOstanComponent })
         this.setState({ showCityComponent: !this.state.showCityComponent })

    }
    backHandler = () => {
        this.setState({ showOstanComponent: !this.state.showOstanComponent })
        this.setState({ showCityComponent: !this.state.showCityComponent })
    }
  
    render() { 
        return (
            <div  style={{zIndex: "10009" , marginTop: "150px" ,position: "fixed" , width: "23%" , background: "white" , borderRadius: "7px"}}>
                    <div className='row'>
                        <div className='col'>
                            <div className='d-flex flex-row-reverse bd-highlight'>
                                <h6 style={{padding: "10px" , marginTop: "10px"}}>انتخاب شهر</h6>
                            </div>
                        </div>
                    </div>
                    <hr style={{width: "90%" , marginLeft: "5%" , marginTop: "0px"}} />

                    
                    {this.state.showCityComponent && <City key={2} select={this.props.select} osName={this.state.ostanName} citi={this.state.city} back={this.backHandler} />}
                    {this.state.showOstanComponent && <Ostan key={1} onNext={this.nextlevelhandler} />}
                </div>
        );
    }
}
 
export default Location;