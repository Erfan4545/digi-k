import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import main from '../files/main.json';
import categories from '../files/categories.json';
import cities from '../files/cities.json';
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './city.css'
class City extends Component {



    render() {
        const city = cities.data.ostan;
        // console.log(city);
        return (
            <div>
                <div className='d-flex flex-row-reverse bd-highlight'>
                        <button onClick={this.props.back} style={{ fontSize: "15px", width: "90%", textAlign: "right" }} className='btn btn-white m-2'>  بازگشت به لیست استان‌ها <FontAwesomeIcon icon={faArrowRight} size='lg' > </FontAwesomeIcon></button>
                    </div>
                <div style={{ overflow: "scroll", height: "600px", overflowX: "hidden", direction: "rtl" }}>

                    {this.props.citi[0].map(x => {
                        
                        return (
                            <div key={x.id} className='d-flex flex-row-reverse bd-highlight'>
                                <button onClick={() => this.props.select(this.props.osName , x.name)} style={{ border: "none", borderBottom: "1px solid rgb(214, 212, 212", width: "95%", background: "white" }}>
                                    <div className='row align-items-center'>
                                        <div className='col'>
                                            <div className='d-flex flex-row bd-highlight'>
                                                <p style={{ paddingTop: "10px" }}>  {x.name} </p>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='d-flex flex-row-reverse bd-highlight'>
                                                <FontAwesomeIcon icon={faChevronLeft} size="sm" > </FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        )

                    })}


                </div>


            </div>

        );
    }
}

export default City;