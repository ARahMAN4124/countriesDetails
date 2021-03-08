import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CountryDetails from "./Components/CountryDetails/CountryDetails";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Main></Main>
        </Route>
        <Route path="/country/:CountryDetails">
          <CountryDetails></CountryDetails>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
