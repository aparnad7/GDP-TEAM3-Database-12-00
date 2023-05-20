import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import Home from './Components/Home';
import File from './Components/Files/File'
import FileList from './Components/FileList/FileList'
import { useState } from 'react';
import NavbarStatus from './Components/NavbarStatus';

function App() {
  const[isLogin,setLogin]= useState(true)
  const onHandleClick=()=>{
      if(isLogin){
          setLogin(false)
      }
      else
      {
          setLogin(true)
      }
  }
  return (
    <div>
      <Router>
        <NavbarStatus>
      <Navbar isLogin={isLogin} />
      </NavbarStatus>
      <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/signin" element={<Signin isLogin={isLogin} onHandleClick={onHandleClick}/>} />
      <Route exact path="/signup" element={<Signup />} /> 
      <Route exact path="/file" element={<File />} />
      <Route exact path="/filelist" element={<FileList />} />
      </Routes>
      </Router>
      
    </div>
  );
}

export default App;
