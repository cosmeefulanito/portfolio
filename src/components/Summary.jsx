import React from 'react'
import Loader from './Loader'

const Summary = () => {
    return (
        <section id='summary' className="bg-[url('./src/assets/img/wavey-fingerprint.svg')]">
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-4 py-20 text-white items-center'>
                <div className='summary-txt'>
                    <h1 className='text-6xl font-bold mb-10 border-b-teal-700 border-b-8 rounded-bl-2xl w-fit'>Summary</h1>
                    <p className='text-justify'>
                        Soy Andrés Astorga, tengo 31 años y soy Ingeniero Informático. Tengo 5 años de experiencia laboral dedicado al desarrollo web fullstack
                        por lo cual tengo las capacidades para desenvolverme como desarrollador frontend y backend; no me considero experto pero si un nativo tecnológico y aficionado por
                        las nuevas tendencias.
                    </p>
                    <p className='text-justify'>
                        Tengo experiencia trabajando en ambientes linux ; me ha tocado configurar entornos de desarrollo, tareas programadas, shell scripting, entre otros.
                    </p>
                    <p className='text-justify'>
                        Por otro lado, tengo experiencia en levantamiento de requerimientos, modelamiento de datos y reglas de negocio, documentación y factibilidad técnica.
                    </p>
                    <p className='text-justify'>
                        Actualmente me encuentro buscando nuevos desafíos que me permitan desarrollar mis capacidades profesionales y contribuir a
                        mejorar los procesos de las compañias y generar un impacto positivo.
                    </p>
                    <button className='text-2xl font-medium bg-neutral-500 hover:bg-orange-900 rounded-lg px-5 py-2 w-fit sm:w-full md:w-full lg:w-auto mt-5'>Descargar CV 📁</button>
                </div>
                <div className='summary-img flex justify-center py-10'>
                    <img src="./src/assets/img/306-3064446_developer-developer-png.png" width={450} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Summary