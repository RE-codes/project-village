import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-primary text-light p-2 text-center footer">
      Copyright &copy; {new Date().getFullYear()} Project Village
    </footer>
  );
};

export default Footer;
