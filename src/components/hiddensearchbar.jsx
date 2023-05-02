import React, { Component } from 'react';
import "./hiddensearchbar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";


class HiddenSearchbar extends Component {
    state = {  } 
    render() { 
        return (
            
                <div id="hiddensearchbar"  className="card" style={{width: "30%" , boxShadow: "0 3px 12px 0 rgb(0 0 0 / 20%)" , zIndex: "10001"}}>

<input className="b-searchbar js-search-input" type="text" name="q" placeholder="جستجو  " autoComplete="off" />
<hr style={{width: "90%" , marginLeft: "5%" , marginTop: "0px" , color: "#0040ff"}} />
<ul style={{borderTop: "none"}} className="list-group list-group-flush">
    <li className="list-group-item" style={{textAlign: "right" , fontSize: ".857rem" , borderBottom: "none"}}> بیشترین جستوجوهای اخیر &nbsp;<i className="fas fa-fire"></i></li>
    <li style={{borderBottom: "none"}} className="list-group-item">
        <div className='d-flex flex-row-reverse bd-highlight'>
        <div className="scrollmenu">
            <a className="btn btn-light mostsearched" href="#">
                <p style={{fontSize: "14px"}} className="btntext"> <FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon> دوچرخه  </p>
            </a>
            <a className="btn btn-light mostsearched" href="#">
                <p style={{fontSize: "14px"}} className="btntext"><FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon> صندلی‌خودرو</p>
            </a>
            <a className="btn btn-light mostsearched" href="#">
                <p style={{fontSize: "14px"}} className="btntext"><FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon> رطوبت‌گیر</p>
            </a>
            <a style={{width: "150px"}} className="btn btn-light mostsearched" href="#">
                <p style={{fontSize: "14px"}} className="btntext"><FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon> مجسمه‌طرح‌ایستر</p>
            </a>
            <a className="btn btn-light mostsearched" href="#">
                <p style={{fontSize: "14px"}} className="btntext"><FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon>لوح‌یوتوب</p>
            </a>
            <a className="btn btn-light mostsearched" href="#">
                <p style={{fontSize: "14px"}} className="btntext"><FontAwesomeIcon icon={faChevronLeft} size="sm" ></FontAwesomeIcon>جامپینگ</p>
            </a>
        </div>
        </div>
    </li>


    <li className="list-group-item">
        <div>
            <a href=""><img style={{width: "100%" , borderRadius: "10px"}} className="partnership" src="./images/partnership.jpg" alt="" /></a>
        </div>
    </li>
</ul>
</div>
            
        );
    }
}
 
export default HiddenSearchbar;