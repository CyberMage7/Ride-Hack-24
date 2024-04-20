import './App.css';
import Signup from "./components/signup/Signup";
import Ytv from "./components/ytvideo/Ytv";
import Login from "./components/login/Login"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/ytv" element={<Ytv />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
