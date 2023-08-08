
// import './App.css';
import Signup from './component/signup';
import Signin from './component/signin';
import Home from './component/home';
import Add from './component/adding';
import Food from './component/foodlist';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      {/* <Signup/> */}
      {/* <Create/> */}
      <Routes>
      <Route element={<Signup/>} path='/signup'/>
      <Route element={<Signin/>} path='/'/> 
      {/* this is first */}
      <Route element={<Home/>} path='/home'/>
      <Route element={<Add/>} path='/adding' />
      <Route element={<Food/>} path='/foodlist' />
      
      </Routes>


      </BrowserRouter>
    </div>
  );
}

export default App;
