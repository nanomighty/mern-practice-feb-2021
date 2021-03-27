import React, {useEffect, useState} from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';


const Update = (props) => {

    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect( () => {
        axios.get('http://localhost:8000/api/products/' + props._id)
            .then((res) => {
                let product = res.data;
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
            })
    }, [props._id])

    const updateProduct = (e) => {
        e.preventDefault();

        axios.put('http://localhost:8000/api/products/' + props._id, {
            title: title,
            price: price,
            description: description,
        })
            .then((res) => {
                    console.log(res.data);
                    navigate("/" + props._id)
                }
            )
            .catch((err) => {
                console.log(err);
            })
    }
    return (
        <div>
            <h3>Update a Product</h3>
            <form onSubmit={updateProduct}>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Title</span>
                    </div>
                    <input type="text" 
                    name="title" 
                    value = {title} 
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                    onChange={(e) => {setTitle(e.target.value)}} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Price</span>
                    </div>
                    <input type="number" 
                    name="price" 
                    value = {price} 
                    min="0" 
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                    onChange={(e) => {setPrice(e.target.value)}} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroup-sizing-default">Description</span>
                    </div>
                    <input type="text" 
                    name="description" 
                    value={description} 
                    className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" 
                    onChange={(e) => {setDescription(e.target.value)}} />
                </div>

                <input type="submit" value="Submit" className="btn btn-success" style={{ "width": "200px" }} />


            </form>

        </div>
    )
}
export default Update;