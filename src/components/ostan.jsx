import React, { Component } from 'react'
import cities from '../files/cities.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faMapMarker } from "@fortawesome/free-solid-svg-icons";


class Ostan extends Component {
    

    render() {
        const city = cities.data.ostan;
     //   console.log(city);
        return (
            <div>
                <div className='d-flex flex-row-reverse bd-highlight'>
                        <button style={{ fontSize: "15px", width: "90%", textAlign: "right", color: "skyBlue" }} className='btn btn-white m-2'>  مکان‌یابی خودکار  <FontAwesomeIcon icon={faMapMarker} size='lg' > </FontAwesomeIcon></button>
                    </div>
                <div style={{ overflow: "scroll", height: "600px", overflowX: "hidden", direction: "rtl" }}>
                    {city.map(x => {
                        return (
                            <div key={x.id} className='d-flex flex-row-reverse bd-highlight'>
                                <button onClick={() => this.props.onNext(x.id)} style={{ border: "none", borderBottom: "1px solid rgb(214, 212, 212", width: "95%", background: "white" }}>
                                    <div className='row align-items-center'>
                                        <div className='col'>
                                            <div className='d-flex flex-row bd-highlight'>
                                                <p style={{ paddingTop: "10px" }}>
                                                    {x.title}
                                                </p>
                                            </div>
                                        </div>
                                        <div className='col'>
                                            <div className='d-flex flex-row-reverse bd-highlight'>
                                                <FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon>
                                            </div>
                                        </div>
                                    </div>
                                </button>
                            </div>
                        )

                    })}


                </div>


            </div >
        );
    }
}

export default Ostan;