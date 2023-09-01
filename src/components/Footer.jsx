import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <img
          className="w-28 cursor-pointer"
          src="https://i.postimg.cc/ht8PCZys/logo-intelieye.png"
          alt="Logo InteliEye"
        />
        <p className="py-4">
          Hi, there! Kami dari Tim Conquer. Proyek ini kami buat untuk kepentingan kompetisi AI Innovation Challenge -
          COMPFEST 15
        </p>
        <p>Copyrights ©️ 2023 | Conquer Team</p>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Arif Saputra</h6>
          <ul>
            <li className="py-2 text-sm">Back-End Engineer</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Muhammad Hafizh Dzaki</h6>
          <ul>
            <li className="py-2 text-sm">AI Engineer</li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Vander Mulya Putra</h6>
          <ul>
            <li className="py-2 text-sm">Front-End Engineer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
