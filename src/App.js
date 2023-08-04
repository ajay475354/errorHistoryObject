import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from "./components/Login/index";
import Home from "./components/Home";
import Products from "./components/Products";
import Cart from "./components/Cart";
import Header from "./components/Header";

import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Header" component={Header} />
        <Route exact path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
