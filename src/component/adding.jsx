import '../styles/add.css'
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './navbar';

const Add = () => {

    let navigate = useNavigate()

    let title = useRef(null)
    let author = useRef(null)
    let imageURL = useRef(null)

    let update =(e) =>{
        e.preventDefault();
        let data = {
            title: title.current.value,
            author: author.current.value,
            imageURL:imageURL.current.value
        };
        axios.post('http://localhost:5000/addfood',data)
        .then((res)=>{
            alert(res.data.message)
            navigate('/home')
        })
    }

    return ( 
        <div className="ct">
        <Navbar/>
        <div className="content">
            
            <div className="pho">
                <img src="https://www.clipartmax.com/png/middle/33-335104_food-blogger-logo.png" alt="" />
            </div>
            <div className="fill">
                <form action="" onSubmit={update}>
                <input ref={title} placeholder="Title" type="text" /><br /><br />
                <input ref={author} placeholder="Author" type="text" /><br /><br />
                <input  ref={imageURL} placeholder="Image name url" type="url" /><br /><br /><br /><br />
                <button>Submit Message</button>
                </form>
            </div>
        </div>
        </div>
     );
}
 
export default Add;