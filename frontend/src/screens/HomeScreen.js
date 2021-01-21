import React, { useState, useEffect } from 'react'
import Product from '../components/product';
import LoadingBox from './../components/LoadingBox';
import MessageBox from './../components/MessageBox';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../Actions/ProductActions';
export default function HomeScreen(props) {
    const dispatch =useDispatch();
    const productList = useSelector((state) => state);
    console.log("HomeScreen-productList->",productList)
    const { loading, error, products} = productList.productList;

    // console.log("HomeScreen state-->",state)
    useEffect(() => {
        console.log("HomeScreen-useEffect->")
       dispatch(listProducts());
    }, [dispatch]);

    const myProd = products;
    const getdata = () =>{
        return(
           
        //    <p>
        //        <p>{console.log("wewe",products)}</p>
        //    </p>
        <div>
        {loading ? (
          <LoadingBox></LoadingBox>
        ) : error ? (
          <MessageBox variant="danger">{error}</MessageBox>
        ) : (
          <div className="row center">
            {products.map((product) => (
              <Product key={product._id} product={product}></Product>
            ))}
          </div>
      )}
    </div>
           
        )         
        // console.log("hekeke", products)
        // // console.log("hekeke1", loading)
        console.log("hekeke2", products)     
    }
    
    return (
        <div>
            {getdata()}
            {/* {products.map(item=>{
                <h1>sdsdsd</h1>
            })}             */}
        </div>
    );
}


