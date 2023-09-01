import React from 'react';
import {
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const About = () => {
  return (
    <div id='tentangkami' className='w-full py-[7rem] px-4 bg-white mt-12'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src='https://i.postimg.cc/RFHp3zLw/profile-dash.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Crew</h2>
              <p className='text-center text-4xl font-bold'>Hafizh Dzaki</p>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>Sepandai-pandainya tupai melompat, lama lama jadi bukit</p>
              </div>
            <div className="flex justify-between md:w-[40%] my-6 mx-auto px-6 py-3">
                <a href="https://github.com/hfzdzakii" target='_blank'><FaGithubSquare size={30} /></a>
                <a href="https://www.linkedin.com/in/hazh-hafizh-2002-mhd/" className='ml-10' target='_blank'><FaLinkedin size={30} /></a>
            </div>
          </div>
          <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src='https://i.postimg.cc/RFHp3zLw/profile-dash.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Captain</h2>
              <p className='text-center text-4xl font-bold'>Arif Saputra</p>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>Kamu pergi membawa kenangan, dan kamu datang kembali membawa undangan</p>
              </div>
              <div className="flex justify-between md:w-[40%] my-6 mx-auto px-6 py-3">
                <a href="http://github.com/arifsptra" target='_blank'><FaGithubSquare size={30} /></a>
                <a href="https://www.linkedin.com/in/arifsptrra/" className='ml-10' target='_blank'><FaLinkedin size={30} /></a>
            </div>
          </div>
          <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
              <img className='w-20 mx-auto mt-[-3rem] bg-white' src='https://i.postimg.cc/RFHp3zLw/profile-dash.jpg' alt="/" />
              <h2 className='text-2xl font-bold text-center py-8'>Crew</h2>
              <p className='text-center text-4xl font-bold'>Vander Mulya</p>
              <div className='text-center font-medium'>
                  <p className='py-2 mx-8 mt-8'>Kalau nilaimu kecil, zoom aja biar gede :)</p>
              </div>
              <div className="flex justify-between md:w-[40%] my-6 mx-auto px-6 py-3">
                <a href="http://github.com/vandermulya" target='_blank'><FaGithubSquare size={30} /></a>
                <a href="https://www.linkedin.com/in/vandermulya/" className='ml-10' target='_blank'><FaLinkedin size={30} /></a>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;