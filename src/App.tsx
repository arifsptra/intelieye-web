import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

interface FormData {
    sentence: string;
}

const App: React.FC = () => {
    const [formData, setFormData] = useState<FormData> ({
        sentence: '',
    });
    const [result, setResult] = useState<any>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prevData => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://api.intelieye.my.id/', formData, {
                headers: {
                'Content-Type': 'application/json',
                },
            });
            console.log('Form submitted successfully');
            setResult(response.data.result);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    };

    return (
        <>
            <Navbar />
            <div className='w-full py-16 text-white px-4'>
        <div className='max-w-[1240px] mx-auto grid lg:grid-cols-2'>
            <div className='lg:col-span-2 my-4'>
            <center>
                <h1 className='md:text-3xl sm:text-2xl text-xl font-bold py-2'>
                    Menyingkap Tirai Mitos dan Fakta <br /> Tersembunyi seputar Kesehatan Mata
                </h1>
            <p className='text-lg'>Apakah benar atau sekadar khayalan?</p>
            </center>
            </div>
            <div className='my-4'>
            
                <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row items-center justify-center w-full'>
                    <input className='p-3 flex w-full rounded-md text-black'
                type='text'
                id="sentence"
                name="sentence"
                value={formData.sentence}
                onChange={handleChange}
                placeholder='Makan terlalu banyak bisa bikin minus?'
                />
                <button className='bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3' type='submit'>
                Cari Tahu
                </button>
                </form>
                <p>Jawabannya Adalah: </p>
                {true && result}
            </div>
        </div>
        </div>
            <Footer />
        </>
    );
};

export default App;