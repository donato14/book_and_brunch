import React, { useState } from 'react'
import './App.scss';
import './_reset.scss';
import axios from 'axios';
import { Button, ButtonToolbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import $ from 'jquery';
import { useSelector } from 'react-redux';


function App() {
  let state = useSelector((state) => state)
  console.log(state)
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

        <div className='slideBase'>
          <div className='slideMenu'>
            {
              state.map((a, i) => {
                return (
                  <div className='item' key={i}>
                    <h3 className='itemTitle'>{a.title}</h3>
                    <p className='itemAutor'>by {a.autor}</p>
                  </div>
                )
              })
            }
          </div>
          <button className='slideBtn' style={{textDecoration :'2px underline', color : '#333'}} onClick={() => {
            $('.slideMenu').css("transform", 'translateX(0px)');
            $('.slideBtn').eq(0).css("text-decoration", '2px underline');
            $('.slideBtn').eq(0).css("color", '#333');
            $('.slideBtn').eq(1).css("color", '#999');
            $('.slideBtn').eq(2).css("color", '#999');
            $('.slideBtn').eq(3).css("color", '#999');
            $('.slideBtn').eq(1).css("text-decoration", 'none');
            $('.slideBtn').eq(2).css("text-decoration", 'none');
            $('.slideBtn').eq(3).css("text-decoration", 'none');
          }}>01</button>
          <button className='slideBtn' onClick={() => {
            $('.slideMenu').css("transform", 'translateX(-960px)');
            $('.slideBtn').eq(1).css("text-decoration", '2px underline');
            $('.slideBtn').eq(1).css("color", '#333');
            $('.slideBtn').eq(0).css("color", '#999');
            $('.slideBtn').eq(2).css("color", '#999');
            $('.slideBtn').eq(3).css("color", '#999');
            $('.slideBtn').eq(0).css("text-decoration", 'none');
            $('.slideBtn').eq(2).css("text-decoration", 'none');
            $('.slideBtn').eq(3).css("text-decoration", 'none');
          }}>02</button>
          <button className='slideBtn' onClick={() => {
            $('.slideMenu').css("transform", 'translateX(-1920px)');
            $('.slideBtn').eq(2).css("text-decoration", '2px underline');
            $('.slideBtn').eq(2).css("color", '#333');
            $('.slideBtn').eq(0).css("color", '#999');
            $('.slideBtn').eq(1).css("color", '#999');
            $('.slideBtn').eq(3).css("color", '#999');
            $('.slideBtn').eq(0).css("text-decoration", 'none');
            $('.slideBtn').eq(1).css("text-decoration", 'none');
            $('.slideBtn').eq(3).css("text-decoration", 'none');
          }}>03</button>
          <button className='slideBtn' onClick={() => {
            $('.slideMenu').css("transform", 'translateX(-2880px)');
            $('.slideBtn').eq(3).css("text-decoration", '2px underline');
            $('.slideBtn').eq(3).css("color", '#333');
            $('.slideBtn').eq(1).css("color", '#999');
            $('.slideBtn').eq(2).css("color", '#999');
            $('.slideBtn').eq(0).css("color", '#999');
            $('.slideBtn').eq(0).css("text-decoration", 'none');
            $('.slideBtn').eq(1).css("text-decoration", 'none');
            $('.slideBtn').eq(2).css("text-decoration", 'none');
          }}>04</button>
        </div>
    </div>
    </>
  );
}

export default App;
