import React, { Component, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./swiper.css";
import { Pagination, Navigation } from "swiper";
import main from '../files/main.json';
import pic from '../files/images/General.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

class TheSwiper extends Component {
    render() {

        const product = main.data.incredible_products.products;

        return (
            <div style={{ height: "20%" }} className='row'>
                <div className='col-2'></div>
                <div className='col-6' style={{ width: "70%", background: "#ef4056", borderRadius: "15px", direction: "rtl" }}>
                    <Swiper style={{ height: "100%", width: "100%", padding: "2%", }}
                        slidesPerView={7}
                        spaceBetween={2}
                        slidesPerGroup={3}
                        loop={false}
                        loopFillGroupWithBlank={true}
                        navigation={true}
                        modules={[Pagination, Navigation]}
                        className="mySwiper"
                    >

                        <SwiperSlide style={{ background: "#ef4056" }}>
                            <div style={{ height: "100%", width: "100%" }} className='row'>
                                <div style={{ color: "white" , fontSize: "1.5vw"  }} className='row justify-content-center'>
                                    پیشنهاده                                     <br />
                                    شگفت                                         <br />
                                    انگیز
                                </div>
                                <div className='row justify-content-center'>
                                    <img style={{ width: "100%", height: "80%" }} src={pic} alt="" />
                                </div>
                                <div className='row'>
                                    <a href='#' style={{ fontSize: "0.8vw", color: "white", textDecoration: "none" }}>   مشاهده‌ همه  <FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon> </a>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide style={{ borderTopRightRadius: "10px", borderBottomRightRadius: "10px" }}>
                            <a style={{ width: "100%", height: "100%" }}>
                                <div style={{ width: "100%", height: "100%", paddingTop: "20%" }} className='row'>
                                    <div style={{ width: "100%", height: "60%" }} className='col-12'>
                                        <img src={main.data.incredible_products.products[0].images.main.url} alt="" />
                                    </div>
                                    <div style={{ width: "100%", height: "40%" }} className='col-12'>
                                        <div style={{ paddingTop: "15%" }} className='row'>
                                            <div className='col'> <p style={{ maxWidth: "120px" , minWidth: "20px" , background: "#ef4056", borderRadius: "20px", fontSize: "0.8vw", marginRight: "10px" }}> 20%</p> </div>
                                            <div style={{ fontSize: "0.9vw" }} className='col'> ۲۴۶٫۰۰۰ <p style={{ fontSize: "0.8vw" }}> تومان </p></div>
                                            <br />
                                            <h6 style={{ textDecoration: "line-through", color: "rgb(179, 176, 176)" , fontSize: "0.8vw"}}>   ۳۰۸٫۰۰۰  </h6>
                                        </div>
                                    </div>
                                </div>
                            </a>
                        </SwiperSlide>
                        {product.map(x => {
                            return (
                                <SwiperSlide key={x.id}>
                                    <Link style={{textDecoration: 'none' , color: "black", width: "100%", height: "100%" }} to={"/product?id="+ x.id}>
                                       
                                            <div style={{ width: "100%", height: "100%", paddingTop: "20%" }} className='row'>
                                                <div style={{ width: "100%", height: "60%" , maxWidth: "100%" }} className='col-12'>
                                                    <img src={x.images.main.url} alt="" />
                                                </div>
                                                <div style={{ width: "100%", height: "40%" }} className='col-12'>
                                                    <div style={{ paddingTop: "15%" }} className='row'>
                                                        <div className='col'> <p style={{ maxWidth: "120px", minWidth: "20px" , background: "#ef4056", borderRadius: "20px", fontSize: "0.8vw", marginRight: "10px" , color: "white" }}> {x.default_variant.price.discount_percent}% </p> </div>
                                                        <div style={{ fontSize: "0.9vw" }} className='col'> {x.default_variant.price.selling_price} <p style={{ fontSize: "0.8vw" }}> تومان </p></div>
                                                        <br />
                                                        <h6 style={{ textDecoration: "line-through", color: "rgb(179, 176, 176)" , fontSize: "0.8vw" }}>   {x.default_variant.price.rrp_price}  </h6>
                                                    </div>
                                                </div>
                                            </div>
                                      
                                    </Link>
                                </SwiperSlide>
                            )
                        })}

                    </Swiper>
                </div>

                <div className='col-4'></div>

            </div>
        );
    }
}

export default TheSwiper;