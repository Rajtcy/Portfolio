import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import "./header.css";
import me from "../../assets/me3.jpg";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Sarvath</h1>
        <h5 className="text-light">DevOps Engineer</h5>
        <CTA />
        <HeaderSocials />

        <div className="me">
          <img src={me} alt="logo" />
        </div>

        {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
      </div>
    </header>
  );
};

export default Header;
