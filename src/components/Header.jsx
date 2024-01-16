import { Link, NavLink } from "react-router-dom";
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
        <NavLink to="/" className="hover:text-[#E3B577] duration-300">Home</NavLink>
        <NavLink to="/productForm" className="hover:text-[#E3B577] duration-300">Add New Coffee</NavLink>
        <NavLink to="/coffee" className="hover:text-[#E3B577] duration-300">Coffees</NavLink>
    </>
    return (
        <header className="md:bg-cover bg-center  h-[7vh] text-white " style={{ backgroundImage: `url(${header})` }}>
            <div className="flex items-center justify-between pt-2 mx-4 md:justify-around">
                <Link to="/" className="flex items-center">
                    <img className=" h-8 mr-2  md:w-[40px] lg:w-12 xl:w-16 lg:h-[55px] md:h-10 " src={logo1} alt="" />
                    <h1 className=" text-[28px] md:text-3xl lg:text-4xl  text-white">Espresso Emporium</h1>
                </Link>

                <nav className="md:hidden">
                    <button onClick={toggleMenu} className="text-white text-3xl hover:text-gray-300">
                        {isMenuOpen ? <RxCross2></RxCross2> : <HiMenuAlt3></HiMenuAlt3>}
                    </button>
                </nav>
                <nav className={`md:flex md:space-x-8 text-2xl transition-all ${isMenuOpen ? 'rounded p-5 mt-32 bg-slate-400 flex flex-col absolute' : 'hidden'}`}>
                    {links}
                </nav>
            </div>
        </header>
    );
}

export default Header;


