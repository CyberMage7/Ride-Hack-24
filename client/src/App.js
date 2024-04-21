import './App.css';
import Signup from "./components/signup/Signup";
import Ytv from "./components/ytvideo/Ytv";
import Login from "./components/login/Login"; 
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from './components/Homepage/Homepage';
import Study from "./components/studymaterial/study";
import Donate from "./components/donate/Donate";
import Scholarship from './components/scholarship/Scholarship';
import About from './components/about/About';
import Lobby from "./components/Lobby/Lobby";
import RoomPage from "./components/Room/Room";

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
        <Route path="/scholarship" element={<Scholarship />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/Lobby" element={<Lobby />} />
        <Route path="/room/:roomId" element={<RoomPage />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
