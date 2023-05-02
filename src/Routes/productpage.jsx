import React, { Component } from 'react';
import { useLocation } from "react-router-dom";
import main from "../files/main.json"
import Main from '../components/main';
import "./productpage.css"
import ReactImageMagnify from 'react-image-magnify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faShop, faHeart, faShareNodes, faBell, faChartLine, faNotEqual, faBars, faShield, faFloppyDisk, faTruck, faCircleExclamation, faSubscript, faTrashCan, faPlus, faSubtract } from '@fortawesome/free-solid-svg-icons';
import firstpage from "../files/firstproductpage.json";
import 'bootstrap/dist/css/bootstrap.css';
import Badge from 'react-bootstrap/Badge';
import TheDropdown from './dropdown';
import store from '../store';
import { productAdded, productIncremented, productReducted, productRemoved } from '../actionCreaters';
import * as actions from '../actionTypes';

class ProductPage extends Component {
    state = {
        length: 0
      
    }


    render() {
        const queryParams = new URLSearchParams(window.location.search);
        const name = queryParams.get('id')

        const product = main.data.incredible_products.products;
        let info = product.find(e => e.id == name);

        const catagories = firstpage.data.product.breadcrumb;
        const specific = firstpage.data.product.specifications[0].attributes;
        const seller = firstpage.data.product.default_variant.seller;





       
        const handleAdd = () => {
           
            const unsubscribe = store.subscribe(() => {
                console.log('Store changed!', store.getState());
            })
            store.dispatch(productAdded(name));
            unsubscribe();
            this.setState({show: this.state.length++})
            console.log(name);
        }


        const handleIncrement = () => {
            const unsubscribe = store.subscribe(() => {
                console.log('Store changed!', store.getState());
            })
            store.dispatch(productIncremented(name));
            unsubscribe();
            this.setState({show: this.state.length++})
            console.log(name);
        }
        const handleRemove = () => {
            const unsubscribe = store.subscribe(() => {
                console.log('Store changed!', store.getState());
            })
            store.dispatch(productRemoved(name));
            unsubscribe();
            this.setState({show: this.state.length--})
        }


        const handleReduction = () => {
            const unsubscribe = store.subscribe(() => {
                console.log('Store changed!', store.getState());
            })
            store.dispatch(productReducted(name));
            

            unsubscribe();
            this.setState({show: this.state.length--})
        }


        //  store.dispatch({
        //     type: actions.PRODUCT_REMOVED,
        //     payload: {
        //          id: 1
        //      }
        //   });


        return (

            <div style={{ overflow: "hidden" }}>
                <div>
                    <Main show={this.state.show} length={this.state.length} />
                </div>
                <hr style={{ marginTop: "0px" }} />

                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <div className='col-3'>
                                <div className='d-flex flex-row-reverse bd-highlight'> <button style={{ fontSize: "13px", color: "gray" }} className='btn btn-white'> <FontAwesomeIcon style={{ color: 'rgb(185, 184, 184)' }} icon={faShop} size='lg' > </FontAwesomeIcon> &nbsp;  فروش در دیجی‌کالا  </button> </div>
                            </div>
                            <div className='col-9'>
                                <button style={{ fontSize: "13px", color: "gray" }} className='btn btn-white'> <FontAwesomeIcon style={{ color: 'rgb(185, 184, 184)' }} icon={faBullhorn} size='lg' > </FontAwesomeIcon> &nbsp;  ثبت آگهی در پیندو </button>
                            </div>
                        </div>
                    </div>
                    <div className='col'>
                        <ul style={{ direction: "rtl", listStyleType: "none" }}>
                            {catagories.map(x => {
                                return (
                                    <li style={{ fontSize: "13px", color: "gray", float: "right" }}>
                                        &nbsp;  &nbsp;
                                        {x.title}
                                        &nbsp; /
                                    </li>
                                )
                            })}
                        </ul>

                    </div>
                </div>
                <br /> <br />

                <div className='row'>
                    <div style={{ color: "skyblue" }} className='col-7'> <hr /> </div>

                    <div style={{ color: "red" }} className='col-4'>
                        <div className='d-flex flex-row-reverse bd-highlight'>    <b>  پیشنهاد شگفت انگیز  </b> </div>
                    </div>
                    <div className='col-1'></div>
                </div>

                <br />
                <div className='row'>
                    <div className='col-7'>
                        <div className='row'>
                            <div className='col-5'>
                                <div style={{ width: "100%", height: "100%" }} className='row justify-content-end'>
                                    <div style={{ width: "65%", height: "100%", background: " rgb(233, 233, 233)", borderRadius: "10px", marginTop: "10%", border: "1px solid rgb(197, 197, 197)" }}>
                                        <div style={{ direction: "rtl" }} className='row'> <h6 style={{ margin: "15px" }}>فروشنده</h6></div>
                                        <div className='row'>
                                            <div className='col-3 col-xs-2 col-sm-3 col-md-3 col-lg-3'></div>
                                            <div className='col-6 col-xs-6 col-sm-6 col-md-6 col-lg-6'>
                                                <div style={{ fontSize: "0.8vw" , color: "rgb(88, 87, 87)" }} className='row justify-content-end'> {seller.title} </div>
                                                <div style={{ fontSize: "0.6vw", marginTop: "10px" }} className='row justify-content-end'>  <div className='col-5'>  عملکرد  <b style={{ color: "green" }}>عالی</b></div> <div className='col-7'><b style={{ color: "green" }}>92%</b>  رضایت از کالا  </div>  </div>
                                            </div>
                                            <div className='col-3 col-xs-3 col-sm-3 col-md-3 col-lg-3'><FontAwesomeIcon style={{fontSize: "0.8vw"}} icon={faShop} > </FontAwesomeIcon></div>
                                        </div>
                                        <hr />
                                        <div className='row justify-content-end'>
                                            <div className='d-flex flex-row-reverse bd-highlight' style={{ fontSize: '13px' }}>   <FontAwesomeIcon icon={faShield} size='lg' > </FontAwesomeIcon>        {firstpage.data.product.default_variant.warranty.title_fa}   &nbsp;    </div>
                                        </div>
                                        <hr />
                                        <div className='row'>
                                            <button className='btn btn-white'>
                                                <div className='d-flex flex-row-reverse bd-highlight' >
                                                    <FontAwesomeIcon style={{ color: "skyblue" }} icon={faFloppyDisk} size='lg' > </FontAwesomeIcon>  &nbsp; &nbsp;  <h6>  موجود در انبار دیجی کالا  </h6>
                                                </div>
                                                <div className='d-flex flex-row-reverse bd-highlight'> <ul style={{ direction: "rtl", fontSize: "12px", marginRight: "-20px" }}> <li> <FontAwesomeIcon style={{ color: "red" }} icon={faTruck} size='lg' ></FontAwesomeIcon> ارسال دیجی‌کالا  </li></ul> </div>
                                            </button>
                                        </div>
                                        <hr />
                                        <div className='row'> <div className='d-flex flex-row-reverse bd-highlight'> امتیاز دیجی کلاب  </div></div>
                                        <hr />
                                        <div className='row'>
                                            <div className='col'>
                                                <div className='row'>
                                                    <div> <Badge style={{ borderRadius: "15px" }} bg="danger"> {firstpage.data.product.default_variant.price.discount_percent}% </Badge> <b style={{ fontSize: "13px", textDecoration: "line-through", color: "rgb(179, 176, 176)" }}> {firstpage.data.product.default_variant.price.rrp_price} </b> </div>
                                                    <div>
                                                        <div className='d-flex flex-row-reverse bd-highlight'><div style={{ color: "gray", fontSize: '13px' }}>  قیمت فروشنده  <FontAwesomeIcon icon={faCircleExclamation} size='sm' ></FontAwesomeIcon> </div> </div>
                                                    </div>
                                                    <div>  {firstpage.data.product.default_variant.price.selling_price}  </div>
                                                </div>
                                                <div style={{ marginTop: "20px" }} className='row'>
                                                    {
                                                      store.getState().find(product => product.productId == name) == undefined  ? 
                                                       <button onClick={handleAdd} style={{ width: "90%", marginLeft: "5%" }} className='btn btn-danger'> افزودن به سبد </button>
                                                         : 
                                                            <div className='row'>
                                                                <div className='col-7'>  </div>
                                                                <div className='col-5'> <div className='row align-items-center' style={{ width: "100px", height: "45px", background: "rgb(233, 233, 233)", borderRadius: "10px", boxShadow: "0 1px 5px rgb(0 0 0 / 20%)" }}> <div className='col-4'>{store.getState().find(product => product.productId == name).amount == 1 ? <a href="#"> <FontAwesomeIcon onClick={handleRemove} style={{ color: "red" }} icon={faTrashCan} size='sm' ></FontAwesomeIcon> </a> : <a href="#"> <FontAwesomeIcon onClick={handleReduction} style={{ color: "red" }} icon={faSubtract} size='sm' ></FontAwesomeIcon> </a>}</div> <div className='col-4'> {store.getState().find(product => product.productId == name).amount} </div> <div className='col-4'> <a href="#"> <FontAwesomeIcon onClick={handleIncrement} style={{ color: "red" }} icon={faPlus} size='sm' ></FontAwesomeIcon> </a></div> </div> </div>
                                                            </div>
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-7'>
                                <div className='d-flex flex-row-reverse bd-highlight'>
                                    <h6>{info.title_fa}</h6>
                                </div>
                                <hr />
                                <div>
                                    {/*  reviews  */}
                                </div>
                                <hr />
                                <TheDropdown />
                                <br /> <br />
                                <div style={{ direction: 'rtl' }}>
                                    <h6>ویژگی ها</h6>
                                    <br />
                                    <ul style={{ marginRight: '-15px' }}>
                                        {specific.map(x => {
                                            return (
                                                <li style={{ color: "gray" }}> {x.title}  :  <strong style={{ color: "black" }}>{x.values}</strong></li>
                                            )
                                        })}
                                    </ul>
                                </div>
                                <br />
                                <hr />
                                <div className='digi-plus'>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-4'>
                        <div className='d-flex flex-row-reverse bd-highlight'>
                            <div style={{ width: "550px", height: "600px" }}>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: info.images.main.url

                                    },
                                    largeImage: {
                                        src: info.images.main.url,
                                        width: 1200,
                                        height: 1200
                                    },
                                    hoverDelayInMs: 0,
                                    enlargedImageContainerStyle: { marginLeft: "-205%", border: "none", boxShadow: "0 20px 25px -8px rgb(0 0 0 / 0.1)" }

                                }} />
                            </div>
                        </div>
                    </div>

                    <div className='col-1'>
                        <div className='row' style={{ height: "100%" }}>
                            <div className='col-1'>
                                <div className='row justify-content-center'><FontAwesomeIcon icon={faHeart} size='xl' > </FontAwesomeIcon></div>
                                <br />
                                <div className='row justify-content-center'><FontAwesomeIcon icon={faShareNodes} size='xl' > </FontAwesomeIcon></div>
                                <br />
                                <div className='row justify-content-center'><FontAwesomeIcon icon={faBell} size='xl' > </FontAwesomeIcon></div>
                                <br />
                                <div className='row justify-content-center'><FontAwesomeIcon icon={faChartLine} size='xl' > </FontAwesomeIcon></div>
                                <br />
                                <div className='row justify-content-center'><FontAwesomeIcon icon={faNotEqual} size='xl' > </FontAwesomeIcon></div>
                                <br />
                                <div className='row justify-content-center'><FontAwesomeIcon icon={faBars} size='xl' > </FontAwesomeIcon></div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        );
    }
}
export default ProductPage;


