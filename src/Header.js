import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Header.css';

function Header() {
  // const [scrolled, setScrolled] = React.useState(false);

  // const handleScroll = () => {
  //   const offset = window.scrollY;
  //   if (offset > 200) {
  //     setScrolled(true);
  //   } else {
  //     setScrolled(false);
  //   }
  // };
  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  // });

  // let x = ['header'];
  // if (scrolled) {
  //   x.push('scrolled');
  // }
  return (
    <nav className="header">
      <Carousel autoPlay>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-1.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-2.jpg"
          />
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-3.jpg"
          />
          <p className="legend">Legend 3</p>
        </div>
        <div>
          <img
            alt=""
            src="http://lorempixel.com/output/cats-q-c-640-480-4.jpg"
          />
          <p className="legend">Legend 4</p>
        </div>
      </Carousel>
      <Link className="header_link">
        <img
          className="header_logo"
          src="https://png.pngtree.com/png-vector/20190425/ourmid/pngtree-camera-icon-vector-illustration-in-line-style-for-any-purpose-png-image_989668.jpg"
          alt="photography"
        />
      </Link>
      <h2 className="header_title">Bharath Photography</h2>
      <div className="header_nav">
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="span_design">PORTFOLIO</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="span_design">BLOG</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="span_design">MEET ME</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="span_design">INFO</span>
          </div>
        </Link>
        <Link to="/" className="header_link">
          <div className="header_option">
            <span className="span_design">CONTACT</span>
          </div>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
