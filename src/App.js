import "./App.scss";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Sides/Home/Home";
import Tshirts from "./Sides/Tshirts/Tshirts";
import Books from "./Sides/Books/Books";
import IntlProviderWrapper from "./Components/IntlProviderWrapper/IntlProviderWrapper";
import DetailsView from "./Sides/DetailsView/DetailsView";

function App() {
  const Error404 = () => <h1>404 – Seite nicht gefunden</h1>;

  return (
    <Router>
      <IntlProviderWrapper>
        <div className="App">
          <Header />
          <Nav />
          <Switch>
            <Route exact path="/tshirts" component={Tshirts} />
            <Route path="/books" component={Books} />
            <Route path="/:elements/:id" children={<DetailsView />} />
            <Route exact path="/" component={Home} />
            {/* //only for github pages */}
            <Route path="/act-of-benevolence" component={Home} />
            <Route component={Error404} />
          </Switch>
        </div>
      </IntlProviderWrapper>
    </Router>
  );
}

export default App;
