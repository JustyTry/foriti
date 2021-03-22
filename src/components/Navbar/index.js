import React from "react";
import {Nav, NavLink, NavBtn, NavBtnLink, NavMenu, Bars} from './NavbarElemnts';
const Navbar = () => {
 
  return (
    <>
      <Nav>
        <NavLink to="/">
          <h1>ИТИ</h1>
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to="/first" activeStyle>
            Первый день
          </NavLink>
          <NavLink to="/second" activeStyle>
            Второй день
          </NavLink>
          <NavLink to="/third" activeStyle>
            Третий день
          </NavLink>
        </NavMenu>
        <NavBtn>
            <NavBtnLink to='/log'>
                Войти
            </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
