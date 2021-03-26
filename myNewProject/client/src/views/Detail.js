import {useEffect, useState} from 'react';
import axios from 'axios';

const Detail = (props) => {
    const [person, setPerson] = useState({});
    useEffect(() => {
        axios.get("http://localhost:8000/api/people/" + props.id)
            .then(res => setPerson({
                ...res.data
            }))
    })
}
export default Detail;