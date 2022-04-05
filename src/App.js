import React, { useState } from 'react'
import './App.scss';
import './_reset.scss';
import axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';


function App() {
  return (
    <>
    <div className="App">
      <Header />
        <div className='introSection'>
          <h2 className='mainTitle'>책과 글이 작품이 되는 공간, 북 & 브런치</h2>
          <span className='logo_1'>
            <img src='img/logo_brunch_v1.png' style={{ width: '28px', height : '28px'}}/>
          </span>
          <p className='mainSub'>브런치에 담긴 아름다운 작품을 감상해 보세요.</p>
          <p className='mainSub'>그리고 다시 꺼내 보세요.</p>
          <p className='mainSubSec'>서랍 속 간직하고 있는 글과 감성을.</p>
          <p className='notice'><span className='update'>Notice</span>이 곳은 브런치 클론 페이지입니다.</p>
        </div>
    </div>
    </>
  );
}

export default App;
