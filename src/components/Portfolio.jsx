import React from 'react'

const Portfolio = () => {
    return (
        <section id='portfolio' className='bg-summary'>
            <div className='container mx-auto text-white grid grid-cols-1 md:grid-cols-1 py-20  px-4'>
                <h1 className='font-bold text-6xl border-b-teal-700 border-b-8 rounded-bl-2xl w-fit'>Portfolio <span>💿</span></h1>
                <p className='text-4xl font-light'>En esta seccion podrás ver algunos de los proyectos que he realizado...</p>
            </div>
            <div className='container mx-auto text-white py-20  px-4'>
                <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-full gap-4 justify-items-center'>
                    <div className="card-zoom">
                        <div className="card-zoom-image bg-cocktail"></div>
                        <h1 className="card-zoom-text">Cocktail-app</h1>
                        <div className='card-zoom-btn'>
                            <button className='btn-card'>
                                <a href="https://bejewelled-sprite-937b13.netlify.app/" target="_blank">Live project</a>
                            </button>
                            <button className='btn-card'>
                                <a href="https://github.com/cosmeefulanito/cocktailapp" target="_blank">Code view</a>
                            </button>
                        </div>
                    </div>

                    <div className="card-zoom">
                        <div className="card-zoom-image bg-orders"></div>
                        <h1 className="card-zoom-text">Orders-app</h1>
                        <div className='card-zoom-btn'>
                            <button className='btn-card'>
                                <a href="https://orders-app-production.up.railway.app/" target="_blank">Live project</a>
                            </button>
                            <button className='btn-card'>
                                <a href="https://github.com/cosmeefulanito/orders-app" target="_blank">Code view</a>
                            </button>
                        </div>

                    </div>
                    <div className="card-zoom">
                        <div className="card-zoom-image bg-appointment"></div>
                        <h1 className="card-zoom-text">Vet-appointment</h1>
                        <div className='card-zoom-btn'>
                            <button className='btn-card'>
                                <a href="https://thunderous-lokum-83d048.netlify.app/" target="_blank">Live project</a>
                            </button>
                            <button className='btn-card'>
                                <a href="https://github.com/cosmeefulanito/Vet-Appointment-system" target="_blank">Code view</a>
                            </button>
                        </div>

                    </div>


                </div>


            </div>
        </section>
    )
}

export default Portfolio