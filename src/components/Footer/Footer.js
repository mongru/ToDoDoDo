import React from "react";

import './Footer.scss';

const Footer = ({ author, date }) => {
  return (
    <footer className="footer">
      <span>{author} </span>
      <span>{date}</span>
    </footer>
  );
};

export default Footer;
