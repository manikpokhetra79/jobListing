import React from 'react';

const Header = () => {
  return (
    <>
      <nav className="navbar">
        <div className="left-nav">
          <img
            src="https://s3-ap-southeast-1.amazonaws.com/letsventure/public/lvlogoblue.png"
            alt="logo"
          />
        </div>
        <div className="mid-nav">
          <p className="active-tab">Jobs {'   '}</p>
          <p>Recruiters</p>
        </div>
        <div className="right-nav">
          <img
            src="https://png.pngtree.com/png-clipart/20190924/original/pngtree-businessman-user-avatar-free-vector-png-image_4827807.jpg"
            alt="user-pic"
            className="user-pic"
          />
          <p>Hello, Shankar </p>
          {/* lower angle icon */}
        </div>
      </nav>
    </>
  );
};

export default Header;
