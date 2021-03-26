import React from 'react';
import {Link} from '@reach/router';


const ProductList = (props) => {

    return (
        <div>
            {props.product.map((product, index) => {
                return <Link to={`/${product._id}`}><p key={index}>{product.title}</p></Link>
            })}
        </div>
    )
}
export default ProductList;