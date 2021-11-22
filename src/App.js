import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Item from './Components/Item/Item';

const App = () => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Route exact path='/page/:number?'><NavBar />
        </Route>
        <div className='app-wrapper-content'>
          <Route 
            exact 
            path='/image/:id?'
            render={() => <Item />}
          />
        </div>
      </div>
    </BrowserRouter>
  )
};

export default App;
