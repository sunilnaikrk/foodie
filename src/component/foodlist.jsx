import { useState, useEffect } from "react";
import axios from 'axios';
import Navbar from "./navbar";
import '../styles/foodlist.css'


const Food = () => {

    let [food,setFood] = useState([])
    

    useEffect(()=>{
        let fetcData = async() =>{
            let response = await axios.get('http://localhost:5000/food')
            let data =await response.data
            setFood(data)
        }
        fetcData()
    })

    // let removeAdd = (id, title) => {
    //     let result = food.filter((f) => f.id !== f.id)
    //     setFood(result)
    //     alert(`${title} items got removed`)
    // }

    return ( 
        <div className="fd">
            <Navbar/>
            <div className="listen">
            {food.map((f)=>{
                return(
                    <div className="dis">
                    <img src={f.imageURL} alt="" />
                    <h3>Title :{f.title} </h3>
                    <p>-writen by Author : {f.author} </p>
                    {/* <a onClick={()=> removeAdd(f.id, f.title)}> Remove</a> */}
                    
                    </div>
                )
            })}
            </div>
        </div>
     );
}
 
export default Food;