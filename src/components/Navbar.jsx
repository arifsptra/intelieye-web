import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img
        className="w-28 cursor-pointer"
        src="https://i.postimg.cc/ht8PCZys/logo-intelieye.png"
        alt="Logo InteliEye"
      />
      <ul className="hidden md:flex">
        <li className="p-4">Beranda</li>
        <li className="p-4">Tentang Kami</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <img
          className="w-24 mt-6 ml-3 cursor-pointer"
          src="https://i.postimg.cc/ht8PCZys/logo-intelieye.png"
          alt="Logo InteliEye"
        />
        <li className="p-4 border-b border-gray-600">Beranda</li>
        <li className="p-4">Tentang Kami</li>
      </ul>
    </div>
  );
};

export default Navbar;
