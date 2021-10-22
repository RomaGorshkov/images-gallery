import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <NavBar />
            </div>
        </BrowserRouter>
    )
};

export default App;
