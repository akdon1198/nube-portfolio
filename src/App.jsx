import { useContext } from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Intro from "./components/intro/Intro";
import Navbar from "./components/navbar/Navbar";
import ProductList from "./components/productList/ProductList";
import Toggle from "./components/toggle/Toggle";
import { ThemeContext } from "./context";
import {
  BrowserRouter as Router,  Switch, Route, Link
} from "react-router-dom";

const App = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      style={{
        backgroundColor: darkMode ? "#222" : "white",
        color: darkMode && "white",
      }}
    >
      <Toggle />
      <Router>
      <Navbar/>
        <Switch>
          <Route exact path="/"><Intro/></Route>
          <Route path = "/about"><About/></Route>
          <Route path = "/project"><ProductList/></Route>
          <Route path = "/contact"><Contact/></Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
