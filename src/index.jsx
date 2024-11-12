// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // React 18 method to render the app
import { Provider } from 'react-redux'; // Import Provider
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter for routing
import App from './App';
import store from './redux/Store'; // Import the store

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <Provider store={store}>  {/* Wrap your app with Provider and pass store */}
    <Router>  {/* Wrap with Router for navigation */}
      <App />
    </Router>
  </Provider>
);
