import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "./components/GlobalStyle";
import Start from "./components/Start";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Routes>
      <Route path="/"  element={<Start/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
