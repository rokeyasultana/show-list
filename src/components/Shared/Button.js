import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text, link }) => {
  return (
    <Link to={link}>
      <button>{text}</button>
    </Link>
  );
};

export default Button;
