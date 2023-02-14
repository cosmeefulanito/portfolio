import React from 'react'
import loveSvg from './../assets/img/love-svgrepo-com.svg'

import Loader from './Loader'

const Footer = () => {
    return (
        <section className='bg-black'>
            <footer className='flex justify-center font-bold'>
                <p className="text-center text-gray-500 text-md mr-2">&copy;2023 Heho con </p>
                <img src={loveSvg} alt="img corazon" width={15} />
                <p className='text-center text-gray-500 text-md ml-2'>por Andrés A.</p>
            </footer>
        </section>
    )
}

export default Footer