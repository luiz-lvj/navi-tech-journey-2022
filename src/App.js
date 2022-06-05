import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Simulate from "./components/Simulate";
import ParkList from "./components/ParkList";
import History from "./components/History";
import Home from "./components/Home";
import Login from "./components/Login";
import Start from "./components/Start";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/"  element={<Start/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/parklist" element={<ParkList/>}/>
      <Route path="/simulate" element={<Simulate/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
