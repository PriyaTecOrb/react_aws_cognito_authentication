import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Otp from "./pages/Otp";
import { Auth } from "./components/Auth";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Auth>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Login />} />
            <Route path="/verification" element={<Otp />} />
          </Routes>
        </BrowserRouter>
      </Auth>
    </>
  );
}

export default App;
