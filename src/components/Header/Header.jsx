import React , { useState }from 'react';
import './Header.css';
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import OutsideClickHandler from "react-outside-click-handler";
// import { Link } from 'react-router-dom';
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
      return {right: !menuOpened && "-100%"}
    }
  }

  
  return (
    <section className='h-wrapper'>
      <div className='flexCenter paddings innerWidth h-container'>
      <a href="#" className="logo">Activatr</a>

        <OutsideClickHandler  onOutsideClick={() => {
            setMenuOpened(false);
          }}>
        <div className='flexCenter h-menu'style={getMenuStyles(menuOpened)}
        >
          <a href=''>HomePage</a>
          <a href=''>Features</a>
          <a href=''>Metric Measures</a>
          <a href=''>Campaign Ideas</a>
          <button className='button'>
          <a href=''>Contact Us</a>
          </button>
        </div>
        </OutsideClickHandler>
        <div className='menu-icon'  onClick={() => setMenuOpened((prev) => !prev)}>
        <BiMenuAltRight size={30} />
      </div>
      </div>
    </section>
  );
};

export default Header;
