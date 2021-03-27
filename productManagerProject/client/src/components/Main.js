import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Form from './Form';
import ProductList from './ProductList';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false); 

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [] )

    const removeFromDom = productId => {
        setProduct(product.filter(product => product._id !== productId));
    }

    return (
        <div>
            <Form />
            <br />
            <hr />
            <br />

            { loaded && <ProductList product={product} removeFromDom={removeFromDom} />}
        </div>
    )
}

    export default Main;
