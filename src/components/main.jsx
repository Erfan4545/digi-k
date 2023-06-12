import React, { Component } from 'react';
import styles from '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faPercent } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faFire } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import Dialog from 'react-bootstrap-dialog';
import cities from '../files/cities.json';
import './main.css';
import Location from './locatin';
import HiddenSearchbar from './hiddensearchbar';
import Badge from 'react-bootstrap/Badge';
import store from '../store';
import { Link } from "react-router-dom";
import { productAdded, productIncremented, productReducted, productRemoved } from '../actionCreaters';
class Main extends Component {


    state = {
        cityname: "لطفا شهر خود را انتخاب کنید"
        ,
        showsearchbar: false ,
        length: 0 
    }

     



    handleSelect = (osName, cityname) => {
        this.setState({ cityname: "ارسال به" + " " + osName + "," + " " + cityname })
    }


    chooseCity = () => {
        this.dialog.showAlert(<div> <div className='row'> <div className='col-6'></div> <div className='col-6'> <h6>انتخاب شهر</h6> </div> </div> </div>);
        this.dialog.show({
            body:

                <Location select={this.handleSelect} />
            ,
            actions: [
            ],
            bsSize: 'medium'
        })
    }


    handlesearchbar = () => {
        this.setState({ showsearchbar: !this.state.showsearchbar })
    }

    handlehidesearchbar = () => {
        this.setState({ showsearchbar: false })
    }
    

    render() {
        return (


            <div>
              <div style={{position: "fixed" , zIndex: "100" , background: "white" , width: "100%"}}>
                <div> <img style={{ height: 'auto' , maxHeight: '10%', width: '100%'}} src="images/topad.jpg" alt="a"></img> </div>
                <div style={{ marginTop: '15px' }} className='row'>
                    <div className='col-1 col-sm-1 col-md-1 col-lg-1 col-xl-1'>
                        <div className="row" style={{ height: '15px' }}> </div>
                        <div className="d-flex flex-row-reverse bd-highlight"> <Link to={"/cart"}> <a className="digipaye" style={{ height: '20px' , marginRight: "20px" }} href="">  <FontAwesomeIcon style={{ color: 'rgb(185, 184, 184)' , position: "absolute" }} icon={faShoppingCart} size='lg' > </FontAwesomeIcon>  {  store.getState().length > 0  && <Badge style={{ borderRadius: "15px" , position: "fixed" , marginLeft: "15px" }} bg="danger"> { store.getState().length } </Badge> }</a> </Link> </div>
                        <div className="row" style={{ height: '15px' }}> </div>
                    </div>
                    <div className="col-3 col-sm-3 col-md-3 col-lg-3 col-xl-3"> <a className="loginbtn" style={{fontSize: "0.8vw" , maxWidth: "70%"}}>ورود به حساب کاربری <FontAwesomeIcon style={{ color: 'rgb(185, 184, 184)' }} icon={faUser} size='lg' > </FontAwesomeIcon></a></div>

                    <div className="col-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                        <div style={{ width: "100%", height: "100%" }} className='d-flex flex-row-reverse bd-highlight'>
                            <input onClick={this.handlesearchbar} className="a-searchbar js-search-input" type="text" name="q" placeholder="جستجو" autoComplete="off" />
                        </div>
                    </div>
                    <div className="col-2 col-sm-2 col-md-2 col-lg-2 col-xl-2">
                     
                        <a  className="digikalalogo" href="#"></a>
                    
                    </div>
                </div>
                <br />
                
                <div style={{display: "flex" , flexDirection: "row"}}>
                    <div>
                        <div className='d-flex flex-row-reverse bd-highlight'>
                            <Button onClick={this.chooseCity} style={{ fontSize: "1vw" }} className="dropbtn navbar-brand mb-0 h1 text-muted location"><span>{this.state.cityname}</span> <FontAwesomeIcon icon={faMapMarkerAlt} size='lg' > </FontAwesomeIcon></Button>
                            <Dialog ref={(el) => { this.dialog = el }} />
                        </div>
                    </div>
    
                    <div style={{position: "sticky" , flexGrow: '6'}}>
                        <div style={{ marginRight: "0px" }} className='d-flex flex-row-reverse bd-highlight'>
                            <div style={{display: "flex" , flexDirection: "row"}}>
                               <div> <button className='text-muted' style={{background: 'white' , border: 'none' , fontSize: '1vW'}}>!فروشنده شوید</button>  </div>
                               <div> <button className='text-muted' style={{background: 'white' , border: 'none' , fontSize: '1vW'}}>سوالی دارید؟</button>    </div>
                               <div> <button className='text-muted' style={{background: 'white' , border: 'none' , fontSize: '1vW'}}>شگفت‌انگیزها <FontAwesomeIcon icon={faPercent} size='lg' > </FontAwesomeIcon></button>   </div>
                               <div> <button className='text-muted' style={{background: 'white' , border: 'none' , fontSize: '1vW'}}>تخفیف ها و پیشنهادها <FontAwesomeIcon icon={faShoppingBasket} size='lg' > </FontAwesomeIcon></button> </div>
                               <div> <button className='text-muted' style={{background: 'white' , border: 'none' , fontSize: '1vW'}}>پرفروش‌ترین‌ها <FontAwesomeIcon icon={faFire} size='lg' > </FontAwesomeIcon></button> </div>
                                <div className="dropdown">
                                    <button style={{ borderLeft: "2px solid gainsboro" , background: 'white' , border: 'none' , fontSize: '1.2vW' }}>دسته‌بندی کالاها <FontAwesomeIcon icon={faBars} size='lg' > </FontAwesomeIcon></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
                <div style={{width: "100%" , height: "200px"}}></div>

                {this.state.showsearchbar &&
                    <div>

                        <div className='hidesearchbar'>
                            <HiddenSearchbar />
                        </div>
                        <div onClick={this.handlehidesearchbar} style={{ width: "30%", height: "7%", zIndex: "1001", position: "fixed", marginTop: "-10%", marginLeft: "53.3%" }}> </div>
                        
                        <div onClick={this.handlehidesearchbar} style={{ width: "30%", height: "100%", zIndex: "1001", position: "fixed", marginTop: "-10%", marginLeft: "83.3%" }}> </div>

                        <div onClick={this.handlehidesearchbar} style={{ width: "53.3%", height: "100%", zIndex: "1000", position: "fixed", marginTop: "-10%", marginLef: "0px" }}> </div>
                    
                        <div onClick={this.handlehidesearchbar} style={{ width: "30%", height: "100%", zIndex: "1001", position: "fixed", marginTop: "15.2%" , marginLeft: "53.3%" }}> </div>
                    
                    </div>
                }

            </div>

        );
    }
}

export default Main;