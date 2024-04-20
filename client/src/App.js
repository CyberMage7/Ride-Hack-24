import './App.css';
import Signup from "./components/signup/Signup";
import Ytv from "./components/ytvideo/Ytv";
import Login from "./components/login/Login"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Study from "./components/studymaterial/study";
import Donate from "./components/donate/Donate";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path ="/" element={<Homepage />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/ytv" element={<Ytv />}></Route>
        <Route path="/study" element={<Study />}></Route>
        <Route path="/donate" element={<Donate />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
