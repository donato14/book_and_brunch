import React from 'react';
import './header.scss'
import '../../_reset.scss'


function Header() {

  

  return (
    <div>
    <header>
      <div className="leftNav">
        <span className="subNav" onClick={()=>{document.querySelector('.nav').style.left = '0px';}}>≡</span>
        <h1 className="title">Book & Brunch</h1>
      </div>
      <div className="startBtn">
        <span className="start">시작하기</span>
      </div>
    </header>
    <div className="nav">
      <div className="navTopMenu">
          <img className="logo" src="img/logo_brunch_v1.png" />
          <p className="quote">You can make anything <br />by writing <br /> <small>- C.S.Lewis -</small></p>
      </div>
    </div>
    </div>
  )
  const nav = document.querySelector('.nav');
  const navBtn = document.querySelector('.subNav');
  
  navBtn.addEventListener('click', () => {
    nav.style.left = '260px';
  });

}

export default Header;