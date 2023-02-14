
import FormularioContacto from './FormularioContacto'
import Loader from "./Loader";
import useForm from "../hooks/useForm";
import controller from './../assets/img/play-game-svgrepo-com.svg'

const Contact = () => {
    const { resultado, cargando } = useForm()
    return (
        <section id='contact' className='bg-slate-800'>
            <div className=' container mx-auto border-blue-900 py-20'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 justify-items-center md:justify-items-center lg:justify-items-start items-center gap-10'>
                    <h1 className='font-bold text-6xl text-white border-b-teal-700 border-b-8 rounded-bl-2xl w-fit mb-5'>Contáctame</h1>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2'>
                    {/* redes sociales */}
                    <div className='contact-media grid grid-rows-2 items-center h-fit p-6'>
                        <div className=' text-white'>
                            <p>Si quieres puedes contactarme por mis redes sociales o también tienes un formulario de contacto que puedes llenar y te estaré respondiendo a la brevedad!</p>
                        </div>
                        <div className=''>
                            <button className='hover:bg-violet-300 rounded-full p-3 transition-colors ease-in'>
                                <a href="https://github.com/cosmeefulanito" target="_blank">
                                    <img src="./src/assets/img/github-icon-svgrepo-com.svg" alt="" width={50} />
                                </a>
                            </button>
                            <button className='hover:bg-violet-300 rounded-full p-3 transition-colors ease-in'>
                                <a href="#" target="_blank">
                                    <img src="./src/assets/img/whatsapp.svg" alt="" width={50} />
                                </a>
                            </button>
                            <button className='hover:bg-violet-200 rounded-full p-3 transition-colors ease-in'>
                                <a href="https://www.linkedin.com/in/aaastorga/" target="_blank">
                                    <img src="./src/assets/img/linkedin.svg" alt="" width={50} />
                                </a>
                            </button>
                        </div>
                    </div>

                    {/* Formulario de contacto */}
                    {resultado ? (
                        <div className='px-5 text-justify flex flex-col justify-center items-center'>
                            <p className='text-white font-semibold text-xl'>Gracias por escribirme! Pronto me contactaré contigo, que tengas un buen dia. Saludos.</p>
                            <img src={controller} alt="controller image" width={80} />
                        </div>
                    ) : <FormularioContacto />}

                </div>
            </div>
        </section>
    )
}

export default Contact