import React, {useEffect, useState} from 'react';
import Form from './Form';
import ProductList from './ProductList';
import axios from 'axios';

const Main = () => {
    const [product, setProduct] = useState([]);
    const [loaded, setLoaded] = useState(false); 

    useEffect( () => {
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProduct(res.data);
                setLoaded(true);
            });
    }, [] )

    return (
        <div>
            <Form />
            <br />
            <hr />
            <br />

            { loaded && <ProductList product={product} />}
        </div>
    )
}

    export default Main;
