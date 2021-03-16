import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './_components/Header';
import MainPage from './_components/MainPage';

//REDUX
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>

        <div className="container">
          <Switch>
            <Route exact path="/" component={MainPage}></Route>
          </Switch>
        </div>

      </Provider>
      
    </BrowserRouter>
  );
}

export default App;
