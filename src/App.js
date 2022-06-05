import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Simulate from "./components/Simulate";
import ParkList from "./components/ParkList";
import History from "./components/History";
import Home from "./components/Home";
import Login from "./components/Login";
import Start from "./components/Start";
import BarGraph from "./components/BarGraph";
import Menu from "./components/Menu";
import Park from "./components/Park";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/"  element={<Start/>} />
      <Route path="/login" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/parklist" element={<ParkList/>}/>
      <Route path="/park" element={<Park/>}/>
      <Route path="/simulate" element={<Simulate/>}/>
      <Route path="/testgraph" element={<BarGraph/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
