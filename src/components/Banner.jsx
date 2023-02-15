import React from 'react'

const Banner = () => {
    return (
        <section id='home' className="bg-banner bg-cover">
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 text-white py-20 px-4'>
                <div className=''>
                    <p className='font-bold text-6xl mb-3'>Hola!<span>🖥</span></p>
                    <p className=' text-lg font-bold'>Soy Andrés Astorga y este es mi portafolio personal, sin pretensiones.</p>
                </div>
                <div className='flex justify-end'>
                    <img src="./src/assets/img/pngwing.com.png" alt="bg-summary" width={250} />
                </div>
            </div>
        </section>
    )
}

export default Banner