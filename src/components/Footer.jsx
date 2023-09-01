import React from 'react';
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300'>
        <div>
            <img className='w-28 cursor-pointer' src="https://i.postimg.cc/ht8PCZys/logo-intelieye.png" alt="Logo InteliEye" />
            <p className='py-4'>Kami dari Tim Conquer Univ. Dian Nuswantoro. Proyek ini asli dan orisinal untuk kepentingan kompetisi AI Innovation Challenge | COMPFEST 15</p>
            <div className='flex justify-between md:w-[40%] my-6'>
                <FaFacebookSquare size={30} />
                <FaInstagram size={30} />
                <FaGithubSquare size={30} />
            </div>
        </div>
        <div className='lg:col-span-2 flex justify-between mt-6'>
        <div>
            <h6 className='font-medium text-gray-400'>Arif Saputra</h6>
            <ul>
                <li className='py-2 text-sm'>Teknik Informatika</li>
                <li className='py-2 text-sm'>A11.2021.13480</li>
                <li className='py-2 text-sm'>Back-End Engineer</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Muhammad Hafizh Dzaki</h6>
            <ul>
                <li className='py-2 text-sm'>Teknik Informatika</li>
                <li className='py-2 text-sm'>A11.2021.13370</li>
                <li className='py-2 text-sm'>AI Engineer</li>
            </ul>
        </div>
        <div>
            <h6 className='font-medium text-gray-400'>Vander Mulya Putra</h6>
            <ul>
                <li className='py-2 text-sm'>Teknik Informatika</li>
                <li className='py-2 text-sm'>A11.2021.13343</li>
                <li className='py-2 text-sm'>Front-End Engineer</li>
            </ul>
        </div>
        </div>
        </div>
    );
};

export default Footer;
