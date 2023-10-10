import React from 'react'
import coffeImg from './../assets/img/306-3064446_developer-developer-png.png'
//import { Download } from '../assets/icons/Download'

const Summary = () => {
    return (
        <section id='summary' className="bg-summary">
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 py-20 text-white items-center'>
                <div className='summary-txt'>
                    <h1 className='text-6xl font-bold mb-10 border-b-teal-700 border-b-8 rounded-bl-2xl w-fit'>Resumen</h1>

                    <p className='text-justify'>Soy Andrés Astorga, Ingeniero en Computación e Informática, me titulé el año 2017 y tengo 5 años de experiencia laboral trabajando como desarrollador fullstack.</p>
                    <p>En frontend he trabajado con tecnologías como: Javascript, css, React js, Bootstrap y Tailwindcss.</p>
                    <p>En backend tengo aptitudes con PHP, Laravel, Nodejs, Java, Springboot, MySQL y PostgreSQL.</p>
                    <p className='text-justify mb-4'>Actualmente me encuentro buscando nuevos desafíos que me permitan desarrollar mis capacidades y poder generar un impacto positivo en las compañías.            
                        Mi intereses son el área de ciberseguridad, cloud computing e infraestructura.</p>
                    {/* <p>En mis tiempos libres me gusta entrenar, ver series y jugar videjuegos.</p>  */}
                    <a className='text-2xl font-medium bg-neutral-500 hover:bg-orange-900 rounded-lg px-5 py-2 sm:w-full md:w-full lg:w-auto w-full border-solid border-2 border-indigo-600' href="/ANDRES-ASTORGA-CV.pdf" target="_blank">Curriculum 📁</a>                  
                </div>
                
                <div className='summary-img flex justify-center py-10'>
                    <img src={coffeImg} width={450} alt="dev-img" />
                </div>
            </div>
        </section>
    )
}

export default Summary