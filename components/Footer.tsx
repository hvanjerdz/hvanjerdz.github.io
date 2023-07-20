import React from "react";
import {AiFillGithub} from "react-icons/ai";


const Footer = () => {
  return (
    <div className="text-white py-4 flex items-center">
      <p className="flex-grow ml-4">Licensed under the GNU General Public License v3.0</p>
      <a className="text-2xl flex-grow-0" href="https://github.com/hvanjerdz/hvanjerdz.github.io">
      <AiFillGithub />
      </a>
    </div>
  );
};

export default Footer;