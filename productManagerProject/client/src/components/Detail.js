import {useEffect, useState} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';

const Detail = (props) => {
    const [product, setProduct] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props._id)
            .then(res => setProduct({
                ...res.data
            }))
    }, [props._id])


    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => { 
                console.log(res); 
                navigate("/")
            })
    }



    return (
        <div>
            <h3>Title : {product.title}</h3>
            <p>Price : ${product.price}</p>
            <p>Description : {product.description}</p>
            <button onClick={(e) => { deleteProduct(product._id)}}> Delete</button>
            <br />
            <br />
        </div>
    )
}
export default Detail;



