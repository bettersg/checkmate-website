import React from 'react';

import ReactDOM from 'react-dom/client';
import App from './App';
import ErrorPage from "./routes/404";
import Index from "./routes/index"

import './index.css';
import DocumentMeta from 'react-document-meta';

import {
  BrowserRouter
} from "react-router-dom";

import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: ''
}

//TagManager.initialize(tagManagerArgs)

const meta = {
  
};



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DocumentMeta {...meta}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DocumentMeta>
  </React.StrictMode>
);
