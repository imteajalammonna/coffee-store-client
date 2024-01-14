import { Link } from "react-router-dom";
import header from "../assets/images/more/15.jpg"
import logo1 from "../assets/images/more/logo1.png";
import { HiMenuAlt3 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const links = <>
        <Link to="/" className="hover:text-[#E3B577] duration-300">Home</Link>
        <Link to="/about" className="hover:text-[#E3B577] duration-300">About</Link>
        <Link to="/services" className="hover:text-[#E3B577] duration-300">Services</Link>
        <Link to="/contact" className="hover:text-[#E3B577] duration-300">Contact</Link></>
    return (
        <header className="md:bg-cover bg-center  h-[8vh] text-white " style={{ backgroundImage: `url(${header})` }}>
            <div className="flex items-center justify-between pt-2 mx-4 md:justify-around">
                <div className="flex items-center">
                    <img className=" h-10 mr-2  md:w-[55px] lg:h-[60px] md:h-12 lg:w-12 xl:w-20  " src={logo1} alt="" />
                    <h1 className=" text-3xl md:text-4xl lg:text-5xl  text-white">Espresso Emporium</h1>
                </div>
                <nav className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-3xl hover:text-gray-300">
                        {isMenuOpen ? <RxCross2></RxCross2> : <HiMenuAlt3></HiMenuAlt3>}
                    </button>
                </nav>
                <nav className={`md:flex md:space-x-8 text-2xl transition-all ${isMenuOpen ? ' p-5 mt-32 bg-slate-400 flex flex-col absolute' : 'hidden'}`}>
                    {links}
                </nav>
            </div>
        </header>
    );
}

export default Header;


