import React, { Component } from 'react';
import main from '../files/main.json';


class Links extends Component {
    render() { 
        const deep = main.data.deep_links;
        return (
          <div style={{direction : "rtl"}} className='row'>
          <div className='col-2'></div>
         <div className='col-8'>
          <div className='row'>
            {deep.map(x => {
                return (
           <div key={x.id} className='col'>
           <a style={{fontSize: "11px" , textDecoration: "none" , color: "black"}} href="">
                    <div style={{width: "52px" , height: "52px"}}><img style={{width: "52px" , height: "52px"}} src={x.icon.url} alt="" /></div>

                    <p style={{marginTop: "5px"}}> {x.title} </p>
                </a>
                </div>
                )
            })}
            </div>
                </div>
                <div className='col-2'></div>
                </div>
                );
    }
}
 
export default Links;