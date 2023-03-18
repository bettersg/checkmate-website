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
  title: 'CheckMate',
  description: 'Easily check if the messages you received are scams',
  canonical: 'https://checkmate.sg',
  meta: {
    charset: 'utf-8',
    property: {
      "og:title": 'CheckMate',
      "og:url": "https://checkmate.sg",
      "og:description": 'Easily check if the messages you received are scams.',
      "og:image": "https://checkmate.sg/logo.jpg",
      "og:type": "website",
      "og:locale": "en_GB"
    }
  }
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
