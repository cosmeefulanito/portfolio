import nodejsSVG from './../assets/img/footer/node-js.svg'
import reactjsSVG from './../assets/img/footer/react-js.svg'
import tailwindSVG from './../assets/img/footer/tailwindcss.svg'
import loveSvg from './../assets/img/love-svgrepo-com.svg'


const Footer = () => {
    return (
        <section className='bg-[#131313]'>
            <footer className='p-4'>
                <p className='text-center text-gray-500 text-md'>Hecho con 💓 por Andrés A.</p>
                <div className='text-white flex justify-center items-center gap-4 my-2'>
                    <img src={nodejsSVG} alt="node-logo" width={40} />
                    <img src={reactjsSVG} alt="react-logo" width={40} />
                    <img src={tailwindSVG} alt="tailwind-logo" width={40} />
                </div>
                <p className="text-center text-gray-500 text-md mr-2">&copy; 2023 </p>

            </footer>
        </section>
    )
}

export default Footer