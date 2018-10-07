import React from 'react';
import ReactDOM from 'react-dom';
import App  from './App';
import { BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./app/store/index";
import { Security } from '@okta/okta-react';
import {authConfig} from './app/auth/authConfig';


ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Security issuer={authConfig.issuer}
                client_id={authConfig.client_id}
                redirect_uri={authConfig.redirect_uri}
      >
        <App />
      </Security>
    </BrowserRouter>
</Provider>
  , document.getElementById('root'));
