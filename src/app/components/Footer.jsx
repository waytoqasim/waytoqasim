import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span className="w-40"><img src="/images/logo-dark.png" alt="Qasim Saeed React Nextjs Web Developer" /></span>
        <p className="text-white">{(new Date().getFullYear())} <a href="mailto:waytoqasim@gmail.com">WaytoQasim</a> All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
