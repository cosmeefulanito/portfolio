import React from 'react'

const Banner = () => {
    return (
        <section id='home' className="bg-summary">
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 text-white py-20 px-4'>
                <div className=''>
                    <p className='font-bold text-6xl'>Hola!<span>🖥</span></p>
                    <p>Gracias por venir a visitarme. Soy Andrés y sin ninguna pretensión te presento mi portafolio</p>
                </div>
                <div className='flex justify-end'>
                    <img src="./src/assets/img/pngwing.com.png" alt="bg-summary" width={250} />
                </div>
            </div>
        </section>
    )
}

export default Banner