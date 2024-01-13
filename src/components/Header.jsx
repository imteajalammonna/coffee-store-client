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
        <Link to="/" className="hover:text-gray-300">Home</Link>
        <Link to="/about" className="hover:text-gray-300">About</Link>
        <Link to="/services" className="hover:text-gray-300">Services</Link>
        <Link to="/contact" className="hover:text-gray-300">Contact</Link></>
    return (
        <header className="bg-cover bg-center h-[7vh] text-white " style={{ backgroundImage: `url(${header})` }}>
            <div className="flex items-center justify-around">
                <div className="flex items-center">
                    <img className="md:w-[55px] md:h-[60px] h-10 mr-2" src={logo1} alt="" />
                    <h1 className=" text-2xl md:text-5xl text-white">Espresso Emporium</h1>
                </div>
                <nav className="md:hidden">
                    <button onClick={toggleMenu} className="text-white hover:text-gray-300">
                        {isMenuOpen ? <RxCross2></RxCross2> : <HiMenuAlt3></HiMenuAlt3>}
                    </button>
                </nav>
                <nav className={`md:flex space-x-8 text-2xl ${isMenuOpen ? 'flex p-5 mt-32 bg-slate-400 flex-col absolute' : 'hidden'}`}>
                    {links}
                </nav>
            </div>
        </header>
    );
}

export default Header;


