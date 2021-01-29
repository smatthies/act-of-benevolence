import "./App.scss";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Sides/Home/Home";
import Tshirts from "./Sides/Tshirts/Tshirts";
import Books from "./Sides/Books/Books";
import IntlProviderWrapper from "./Components/IntlProviderWrapper/IntlProviderWrapper";

function App() {
  const Error404 = () => <h1>404 – Seite nicht gefunden</h1>;

  return (
    <Router>
      <IntlProviderWrapper>
        <div className="App">
          <Header zahl1="1" zahl2="2" />
          <Nav />
          <Switch>
            <Route path="/tshirts" component={Tshirts} />
            <Route path="/books" component={Books} />
            <Route exact path="/" component={Home} />
            <Route component={Error404} />
          </Switch>
        </div>
      </IntlProviderWrapper>
    </Router>
  );
}

export default App;
