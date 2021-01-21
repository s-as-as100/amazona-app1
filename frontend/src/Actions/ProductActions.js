import Axios from 'axios';
 
import { 
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS, 
    PRODUCT_LIST_FAIL }
    from './../constants/ProductConstants';

export const listProducts = () => async (dispatch) => {
    dispatch({
        type:PRODUCT_LIST_REQUEST,
    });
    try {
        const {data} = await Axios.get('http://localhost:3005/api/products');
        console.log("payload->>",data)
        dispatch( {type: PRODUCT_LIST_SUCCESS, payload:data})
    } catch(error) {
        dispatch({type: PRODUCT_LIST_FAIL, payload: error.message});
    }
};