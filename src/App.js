import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Simulate from "./components/Simulate";
import ParkList from "./components/ParkList";
import History from "./components/History";
import Home from "./components/Home";
import Login from "./components/Login";
import Start from "./components/Start";
import Menu from "./components/Menu";
import Park from "./components/Park";
import { useState } from "react";


function App() {
  const [userName, setUserName] = useState("Bryan Borck");
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/"  element={<Start/>} />
      <Route path="/login" element={<Login  setUserName={setUserName} />}/>
      <Route path="/home" element={<Home userName={userName}  />}/>
      <Route path="/menu" element={<Menu />}/>
      <Route path="/history" element={<History />}/>
      <Route path="/parklist" element={<ParkList/>}/>
      <Route path="/park" element={<Park/>}/>
      <Route path="/simulate" element={<Simulate/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
