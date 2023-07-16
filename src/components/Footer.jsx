import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <p className="text-sm">© {new Date().getFullYear()} Austin Tech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
