import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Home from "./components/Home";
import Start from "./components/Start";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/"  element={<Start/>} />
      <Route path="/home" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
