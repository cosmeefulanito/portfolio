import React from 'react'
import coffeImg from './../assets/img/pngwing.com.png'
import { Location } from '../assets/banner/Location'
import { Academic } from '../assets/banner/Academic'
import { Email } from '../assets/banner/Email'
const Banner = () => {
    return (
        <section id='home' className="bg-banner bg-cover">
            <div className='container mx-auto grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 text-white py-10 px-4 h-auto'>
                <div className="animate-pulse text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 h-full mb-3">{`{ Andrés Astorga }`}</div>
                <div className='flex justify-center items-center w-fit space-x-1'>
                    <Location />
                    <div className='text-lg font-light'>Santiago, Chile</div>
                </div>
                <div className='flex justify-center items-center w-fit space-x-1'>
                    <Academic />
                    <div className='text-lg font-light'> Ingeniero de software</div>
                </div>
                <div className='flex justify-center items-center w-fit space-x-1'>
                    <Email />
                    <div className='text-lg font-light'> andres.astorga@mayor.cl</div>
                </div>
            </div>
        </section>
    )
}

export default Banner