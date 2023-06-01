import logo from './logo.svg';
import './App.css';
import Swal from "sweetalert2";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route,Routes} from "react-router-dom";
import Signup from './components/Signup';
import Login from './components/Login';
import Otp from './components/Otp';
import {Auth} from './components/Auth';
import Header from './components/Header';


function App() {
  return (
    <>
      <Auth>
        <Header/>
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element = {<Signup/>} />
            <Route path="/" element = {<Login/>} />
            <Route path="/verification" element = {<Otp/>} />
          </Routes>
        </BrowserRouter>
      </Auth>  
    </>
  );
}

export default App;
