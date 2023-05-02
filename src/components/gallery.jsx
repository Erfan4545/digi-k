import React, { Component } from 'react';
import main from '../files/main.json';
import Carousel from 'react-bootstrap/Carousel';
class Gallery extends Component {
    render() { 
       const pictures = main.data.header_banners;
    //    console.log(pictures);
       return (
            
   
      <Carousel>
  {pictures.map(x => {
       return (
       <Carousel.Item key={x.id}>
       <img 
        src={x.image} 
        className="d-block w-100" 
        alt="..."
        />
  </Carousel.Item>)
   })}
    
</Carousel>
   
        );
    }
}
 
export default Gallery;