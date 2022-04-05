import React, { useState, useEffect, useRef } from 'react';
import './header.scss'
import '../../_reset.scss'
import {CSSTransition} from 'react-transition-group';


function Header() {

  // Nav 메뉴 on, off 코드
  let [Nav, setNav] = useState(false);
  const el = useRef();
  const handleCloseNav = e => {
    if (Nav && (!el.current || !el.current.contains(e.target))) setNav(false);
  }
  useEffect(() => {
    window.addEventListener('click', handleCloseNav);
    return () => {
      window.removeEventListener('click', handleCloseNav);
    };
  }, [Nav]);

  // let [navSwitch, setSwitch] = useState(false);

  // function 서순() {
  //   setNav(true);
  //   setSwitch(true);
  // };

  return (
    <div>
      <header>
        <div className="leftNav">
          <span className="subNav" onClick={() => {
            setNav(true);
          }}>≡</span>
          <h1 className="title">Book & Brunch</h1>
        </div>
        <div className="startBtn">
          <span className="start">시작하기</span>
        </div>
      </header>
      {
        Nav === true
          ?
          // <CSSTransition in={navSwitch} classNames="navBarAni" timeout={2000}>
          <div className="sideNavBar" ref={el}>
            <div className="navTopMenu">
              <img className="logo" src="img/logo_brunch_v1.png" />
              <p className="quote">You can make anything <br />by writing <br /> <small>- C.S.Lewis -</small></p>
              <button className="navTopMenuStartBtn">북&브런치 시작하기</button>
            </div>
            <div className="navSideBarMenu">
              <ul className="navSideList">
                <li className="sideList sideBarHome">북 & 브런치 홈</li>
                <li className="sideList sideBarNow">북 & 브런치 나우</li>
                <li className="sideList sideBarBook">북 & 브런치 책방</li>
              </ul>
            </div>
            <div><p className='accountForget'>계정을 잊어버리셨나요?</p></div>
          </div>
          // </CSSTransition>
          :
          null
      }
    </div>
  )
}

export default Header;