import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import './Header.css';
import styles from './Header.scss';

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
      <AwesomeSlider cssModule={styles}>
        <div data-src="/path/to/image-0.png" />
        <div data-src="/path/to/image-1.png" />
        <div data-src="/path/to/image-2.jpg" />
      </AwesomeSlider>
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
