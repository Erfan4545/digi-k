import React, { Component } from 'react'
import Main from './main';
import Product from './product';
import Gallery from './gallery';
import Links from './links';
import TheSwiper from './swiper';
import Incredibles from './incredibles';


class Components extends Component {
    state = {
    }
    
   
    
    
    render() { 
        return (
            <React.Fragment>
            <Main/>
           <Gallery />
           <br></br>
            <Links />
            <TheSwiper/>
            <br />
            <Incredibles />
            </React.Fragment>
        );
    }
}
 
export default Components;