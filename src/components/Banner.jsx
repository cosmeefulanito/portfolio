import React from 'react'

const Banner = () => {
    return (
        <section id='home' className='bg-[#131313]'>
         {/* <section id='home' className="bg-[url('./src/assets/img/wavey-fingerprint.svg')]"> */}
            <div className='container mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 text-white py-20 px-4'>
                <div className=''>
                    <p className='font-bold text-6xl'>Hola!<span>🖥</span></p>
                    <p>Gracias por venir a visitarme. Soy Andrés y sin ninguna pretensión te presento mi portafolio</p>
                    {/* <p className=' text-2xl font-light mt-10'>"No man can wear one face to himself and another to the multitude without finally getting bewildered as to which may be true" - The sopranos.</p> */}
                </div>
                <div className='flex'>
                    <img src="./src/assets/img/web-development-minimalism.jpg" alt="" />
                </div>
            </div>
        </section>
    )
}

export default Banner