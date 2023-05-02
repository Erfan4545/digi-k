import main from '../files/main.json'
import React, { Component } from 'react';
import categories from '../files/categories.json';

class Product extends Component {
    render() {
       const products = main.data.best_selling_products.products;
         console.log(products);
     // const A = categories.data;
     // console.log(A);
        return <div>
            <div className='row'>
                <div className="col-12">
                    <div className="row">
                        {products.map(x => {
                            return <div className="col-4">
                                <div className="card">
                                    <div className="header">
                                        <a target="_blank" href={"http://digikala.com"+ x.url.uri}>{x.title_fa}</a>
                                    </div>
                                    <div className="body">
                                        <img src={x.images.main.url[0]} alt="" />
                                    </div>
                                </div>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        </div>
    }
}


export default Product;