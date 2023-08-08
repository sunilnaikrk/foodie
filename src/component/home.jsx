import "../styles/home.css"
// import { Link } from "react-router-dom";

import Navbar from "./navbar";

const Home = () => {
    return (
        <div className="page">
            {/* <h1>Home page</h1> */}

            {/* <div className="navbar">
                <h2>Stories<span style={{color:"red" }}>.</span> </h2>
                <div className="link">
                    <a href="">Home</a>
                    <Link to={'/foodlist'}>Food</Link>
                    <Link to={'/adding'} >Add Food</Link>
                </div>
            </div> */}
            <Navbar/>
            
            <div className="banner">
                <div className="pht">
                    <img src="https://images.unsplash.com/photo-1564495584622-0bb3af6f668e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBibG9nfGVufDB8fDB8fHww&w=1000&q=80" alt="" />
                </div>
                <div className="side">
                    <div className="txt">
                        <p>FEATURED POST</p> <br />
                        <h1 style={{ fontSize: 40 }}>I am A <br /> Blogger & I <br />
                            Love Foods</h1> <hr /> <br />
                        <p>A small river named Duden flows <br /> by their place and supplies it with <br /> the necessary regelialia</p> <br />
                        <button id="b1">READMORE</button>
                    </div>
                    <div className="btn">
                        <button>Forward</button>
                        <button>Next</button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Home;