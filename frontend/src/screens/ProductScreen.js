import React from 'react'
//import Product from './../components/product';
//import ProductScreen from './ProductScreen';

import data from '../data';
import Rating from '../components/rating';
//import data from './../data';
import { Link } from 'react-router-dom';

export default function ProductScreen(props) {
    console.log("ProductScreen-->",props)
     const product = data.products.find((x) => x._id === props.match.params.id);
     if (!product) {
         return <div> Product Not found</div>
     }
    return (
        <div>
            <Link to="/">Back to result</Link>
        <div className="row top">
          <div className="col-2">
            <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
            <ul>
                <li>
                    <h1>{product.name}</h1>
                </li>
                <li>
                    <Rating 
                    rating={product.rating}
                    numReviews={product.numReviews}>
                    </Rating>
                </li>
                <li>
                    price:${product.price}
                </li>
                <li>
                    Describtion:
                    <p>
                        {product.description}
                    </p>
                </li>
            </ul>

        </div>
        <div className="col-1">
            <div className="card card-body">
                <ul>
                    <li>
                        <div className="row">
                            <div>price</div>
                            <div className="price">${product.price}</div>
                        </div>
                    </li>
                    <li>
                        <div className="row">
                            <div>Status</div>
                            <div>
                                {product.countInstock> 0 ? (
                                <span className="success">In Stock</span>
                                ) : (
                                <span className="danger">Unavailable</span>
                                ) }
                            </div>
                             
                        </div>
                    </li>
                    <li>
                        <button className="primary block">Add to cart</button>
                    </li>
                </ul>
            </div>
            
            </div>
         </div>
        </div>
    )
}
