import React from 'react';
import Nav from './Components/Layout/Nav';

import './App.css';

function App() {
    return (
        <div className="App">
            <Nav />

            <div className='content'>
                <h2> Welcome to Gigapet</h2>
                <p>If you see this, everything is running!</p>
            </div>
        </div>
    );
}

export default App;
