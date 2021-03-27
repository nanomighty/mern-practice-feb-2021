import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';


const ProductList = (props) => {

    const {removeFromDom} = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }

    return (
        <div>
            {props.product.map((product, index) => {
                return <p key={index}>
                    <Link to={`/${product._id}/`}>{product.title}</Link> &nbsp;
                    <Link to={"/" + product._id + "/edit/"}><button>Edit</button></Link> &nbsp;
                    <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                
                </p>
            })}
        </div>
    )
}
export default ProductList;