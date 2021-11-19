import React, { useEffect, useState } from 'react';
import {  Route } from 'react-router-dom';
import axios from 'axios';
import Header from './Components/Header/Header';
import NavBar from './Components/NavBar/NavBar';
import Preloader from './Components/Common/Preloader/Preloader';
import Pagination from './Components/Pagination/Pagination';
import Item from './Components/Item/Item';

const App = () => {

  const [state, setState] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize] = useState(6)

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list')
      .then(resp => {
        const allImg = resp.data;
        setState(allImg);
      });
  }, [setState]);

  const lastImgIndex = currentPage * pageSize;
  const firstImgIndex = lastImgIndex - pageSize;
  const currentImg = state.slice(firstImgIndex, lastImgIndex);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  if (state.length === 0) {
    return <Preloader />
  }

  return (
      <div className='app-wrapper'>
        <Header />
        <NavBar currentImg={currentImg}/>
        <Pagination pageSize={pageSize}
          totalImg={state.length}
          currentPage={currentPage}
          paginate={paginate} />
          <div className='app-wrapper-content'>
            <Route path='/image/:id?'   
            render={() => <Item state={state}/>}/>
          </div>
      </div>
  )
};

export default App;
