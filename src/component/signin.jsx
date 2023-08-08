import "../styles/signup.css"
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import { Link } from 'react-router-dom'

 
const Signin = () => {

    let navigate = useNavigate()

    // let name = useRef(null)
    let email = useRef(null)
    let password = useRef(null)

    let submit = (e) => {
        e.preventDefault();
        let data = {
            // name: name.current.value,
            email: email.current.value,
            password: password.current.value,
        };
        axios.post('http://localhost:5000/signin',data)
        .then((res) =>{
            alert(res.data.message)
            if (res.data.status == 200) {
                navigate('/home')
            }
        })
        // alert('user added successfully')
        // console.log(data);
        
    }


    return (
        <div className="app">

            <div className="photo">
                <img src="https://flex.com/wp-content/uploads/2023/03/leaf.png" alt="" />
            </div>
            <div className="sign">
                <h2>LOGIN.Colorlib</h2>
                <br />
                <form action="" onSubmit={submit}>
                    {/* Name : <br /> */}
                    {/* <input ref={name} placeholder="Enter Name" type="text" /><br /> */}
                    Email : <br />
                    <input ref={email} placeholder="Enter email" type="email" /><br />
                    Password : <br />
                    {/* <label htmlFor="password">password :</label> */}
                    <input ref={password} placeholder="Enter password" type="password" /> <br /><br />
                    
                    <button>LOGIN</button>
                </form>
                {/* <a href="">GO TO LOGIN</a>  */}
                <Link to={'/signup'}>create account</Link>
            </div>


        </div>
    );
}

export default Signin;