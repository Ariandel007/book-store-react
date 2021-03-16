import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from './_components/Header';

//REDUX
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Header/>

      </Provider>
      
    </BrowserRouter>
  );
}

export default App;
