import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-nav">
          <img src="" alt="logo" />
        </div>
        <div className="mid-nav">
          <p>Jobs</p>
          <p>Recrutiers</p>
        </div>
        <div className="right-nav">
          <img src="" alt="user-pic" />
          <p>Hello, Shankar </p>
          {/* lower angle icon */}
        </div>
      </nav>
    </>
  );
};

export default Header;
