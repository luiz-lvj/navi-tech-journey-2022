import { BrowserRouter, Route, Switch } from "react-router-dom";
import GlobalStyle from "./components/globalStyle";


function App() {
  return (
    <BrowserRouter>
    <GlobalStyle/>
    <Switch>
      <Route path="/" exact>
        
      </Route>
    </Switch>
    </BrowserRouter>
  );
}

export default App;
