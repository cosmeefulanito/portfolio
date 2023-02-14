import { useState } from "react";
import './../App.css'

const Navbar = () => {
    const [navbar, setNavbar] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    return (
        <>
            <section className="flex items-center justify-between py-8 px-4 w-full bg-[#131313] shadow sticky top-0 z-50">
                <a href="#">
                    <h2 className="animate-pulse text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">{`{ Andrés }`}</h2>
                </a>
                <nav>
                    <section className="flex lg:hidden">
                        <div className="space-y-2" onClick={() => setIsNavOpen((prev) => !prev)}>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                        </div>
                        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
                            <div className="absolute top-0 right-0 px-8 py-8" onClick={() => setIsNavOpen(false)}>
                                <svg className="h-8 w-8 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                                    strokeLinecap="round" strokeLinejoin="round" >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="flex flex-col items-center justify-between min-h-[250px]">
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="#home">Home</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="#portfolio">Portfolio</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="#summary">Summary</a>
                                </li>
                                <li className="border-b border-gray-400 my-8 uppercase">
                                    <a href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </section>

                    <ul className="hidden space-x-8 lg:flex">
                        <li className="text-gray-600 hover:text-blue-600">
                            <a href="#home">About</a>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <a href="#summary">Summary</a>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <a href="#portfolio">Portfolio</a>
                        </li>
                        <li className="text-gray-600 hover:text-blue-600">
                            <a href="#contact">Contact</a>
                        </li>
                    </ul>
                </nav>
            </section>



        </>
    )
}

export default Navbar