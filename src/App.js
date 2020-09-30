import React, { useState } from 'react';
import './css/App.css';
import Search from './components/Search';
import Results from './components/Results';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Detail from './components/Detail';
import Navigation from './components/Navigation';

function App() {
  const [selectedQuery, setSelectedQuery] = useState('iphone')
  return (
    <div className="app">
      <Router>
        <div className="app">
          <Switch>
            <Route path="/:productId/description">
              <Search />
              <Navigation
                categorias="Electrónica, Audio y Video, Celulares y Teléfonos> Celulares y Smartphones >Apple> iPhone 11"
              />
              <Detail />
            </Route>
            {/* <Route path="/login">
            <Login />
          </Route> */}
            <Route path="/search/:query">
              <Search />
              <Navigation
                categorias="Electrónica, Audio y Video, Celulares y Teléfonos> Celulares y Smartphones >Apple> iPhone 11"
              />
              <Results selectedQuery={selectedQuery} />
            </Route>
            <Route path="/">
              <Search setSelectedQuery={setSelectedQuery} />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
