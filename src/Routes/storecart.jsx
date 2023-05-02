import React, { Component } from 'react'
import Main from '../components/main';
import "./storecart.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as Icons from '@fortawesome/free-solid-svg-icons';
import main from "../files/main.json";
import store from '../store';
import { productAdded, productIncremented, productReducted, productRemoved } from '../actionCreaters';
import * as actions from '../actionTypes';
class StorCart extends Component {
    state = {
        show: false,
        total: 0 ,
        length: 0,
        total: 0
    }


    render() {
        let info = [];
        let total = 0;
        let totalprice= 0;
        let product = main.data.incredible_products.products;
        for (let i = 0; i < store.getState().length; i++) {
            info = [...info, product.find(e => e.id == store.getState()[i].productId)]     
            total = total + (info[i].default_variant.price.selling_price * store.getState().find(product => product.productId == info[i].id).amount);
            totalprice = totalprice + (info[i].default_variant.price.rrp_price * store.getState().find(product => product.productId == info[i].id).amount)
        }
        localStorage.setItem('totalprice', totalprice)
        localStorage.setItem('total', total)
     //   console.log(localStorage.getItem('totalprice'))
   //     console.log(info)
      //  x.default_variant.price.selling_price


      

        const handleIncrement = (ID) => {
            const unsubscribe = store.subscribe(() => {
                console.log('Store changed!', store.getState());
            })
            store.dispatch(productIncremented(ID + ""));


            unsubscribe();
            this.setState({show: this.state.length++})
        }
        const handleRemove = (ID) => {
            const unsubscribe = store.subscribe(() => {
                console.log('Store changed!', store.getState());
            })
            store.dispatch(productRemoved(ID + ""));
            unsubscribe();
            this.setState({show: this.state.length--})
        }


        const handleReduction = (ID) => {
            const unsubscribe = store.subscribe(() => {
                console.log('Store changed!', store.getState());
            })
            store.dispatch(productReducted(ID + ""));


            unsubscribe();
            this.setState({show: this.state.length--})
        }
        return (
            <div>
                <div>
                    <Main />
                </div>

                <hr style={{ marginTop: "0px" }} />
                <br />
                <div>
                    <div className='row'>
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row justify-content-end">
                                <button style={{fontSize: "0.9vw"}} className="buy"><b> خرید بعدی </b></button>
                                <button style={{fontSize: "0.9vw"}} type='button' className="buy"><b> سبد خرید </b></button>
                                <hr />
                            </div>
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className='row'>
                        <div className="col-2"></div>
                        <div className="col-8">
                            <div className="row">
                                <div style={{ height: "10%" }} className="col-3">
                                    <div style={{ border: "0.5px solid rgb(201, 196, 196)", width: "100%", height: "100%", borderRadius: "10px" }}>
                                        <div className='row'>
                                            <div className='col-6'>
                                                <div style={{ color: "rgb(90, 90, 90)", fontSize: "0.8vw", margin: "22px", textAlign: "center" , direction: "rtl" }} className='row'> {localStorage.getItem('totalprice')}  تومان</div>
                                                <div style={{  fontSize: "0.8vw", margin: "22px", textAlign: "center"  , direction: "rtl" }} className='row'>{localStorage.getItem('total')} تومان</div>
                                                <div style={{ color: "red", fontSize: "0.8vw", margin: "22px", textAlign: "center" , direction: "rtl"  }} className='row'> {localStorage.getItem('totalprice') - localStorage.getItem('total') }  تومان</div>
                                            </div>
                                            <div className='col-6'>
                                                <div style={{ color: "rgb(90, 90, 90)", fontSize: "0.8vw", margin: "23px", textAlign: "center" }}>    ({store.getState().length})      قیمت کالاها    </div>
                                                <div style={{  fontSize: "0.8vw", margin: "23px", textAlign: "center" }}>         جمع‌ سبد خرید   </div>
                                                <div style={{ color: "red", fontSize: "0.8vw", margin: "23px", textAlign: "center" }}>         سود شما از خرید   </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                           <button style={{width: "80%" , marginLeft: "10%" , borderRadius: "10px" , height: "auto" , fontSize: "0.8vw"}} className='btn btn-danger'>ادامه</button>
                                        </div>
                        <br />
                                    </div>
                                </div>

                                <div style={{ border: "1px solid rgb(201, 196, 196)", borderRadius: "10px" }} className="col-9">
                                    <div style={{ marginTop: "10px" }} className='row'>
                                        <div className="col-1"><FontAwesomeIcon style={{ color: "grey" }} icon={Icons.faEllipsisVertical} size='lg' > </FontAwesomeIcon></div>
                                        <div className="col-11"><div className="d-flex flex-row-reverse bd-highlight" style={{fontSize: "0.9vw"}}> <b>سبد خرید شما</b> </div></div>
                                    </div>
                                    <br />
                                    <br />

                                    {info.map(x => {
                                  //   this.setState({total: this.state.total + x.default_variant.price.selling_price * store.getState().find(product => product.productId == x.id).amount})
                                        return (
                                            <div key={x.id}>
                                                <div className="row">
                                                    <div className="col">
                                                        <div className="row"> </div>
                                                        <div className="row"> </div>
                                                    </div>
                                                    <div className="col">
                                                        <div className="row justify-content-end"> <img style={{ width: "150px", height: "150px" }} src={x.images.main.url} alt="" /> </div>
                                                        <div className="row justify-content-end"><div className='row align-items-center' style={{ width: "100px", height: "45px", background: "rgb(233, 233, 233)", borderRadius: "10px", boxShadow: "0 1px 5px rgb(0 0 0 / 20%)" , margin: "5px" }}> <div className='col-4'>{store.getState().find(product => product.productId == x.id).amount == 1 ? <a href="#"> <FontAwesomeIcon onClick={() => handleRemove(x.id)} style={{ color: "red" }} icon={Icons.faTrashCan} size='sm' ></FontAwesomeIcon> </a> : <a href="#"> <FontAwesomeIcon onClick={() => handleReduction(x.id)} style={{ color: "red" }} icon={Icons.faSubtract} size='sm' ></FontAwesomeIcon> </a>}</div> <div className='col-4'> {store.getState().find(product => product.productId == x.id).amount} </div> <div className='col-4'> <a href="#"> <FontAwesomeIcon onClick={() => handleIncrement(x.id)} style={{ color: "red" }} icon={Icons.faPlus} size='sm' ></FontAwesomeIcon> </a></div> </div></div>
                                                    </div>
                                                </div>
                                                <br />
                                                <div className="row"> <div className='col'> <a style={{ fontSize: "13px", textDecoration: "none", color: "#19bfd3" }} href="#"><FontAwesomeIcon icon={Icons.faChevronLeft} size='sm'></FontAwesomeIcon> &nbsp;  انتقال به خرید بعدی  </a> </div> <div style={{direction: "rtl"}} className='col offset-8'> {x.default_variant.price.selling_price * store.getState().find(product => product.productId == x.id).amount} تومان </div> </div>


                                                <hr style={{ width: "102.5%", marginLeft: "-1.4%" }} />
                                            </div>
                                        )
                                    })}

                                    <br />
                                    <br />

                                </div>

                            </div>

                        </div>
                        <div className="col-2"></div>
                    </div>
                </div>

            </div>
        );
    }
}

export default StorCart;