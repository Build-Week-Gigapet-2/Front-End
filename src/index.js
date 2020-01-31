import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Redux & Store
import { Provider } from 'react-redux';
import store from './Utils/Store';

// Styles
import './index.css';


const AppWithProvider = (
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(AppWithProvider, document.getElementById('root'));