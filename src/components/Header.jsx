import header from "../assets/images/more/15.jpg"
import logo1 from "../assets/images/more/logo1.png"

const Header = () => {
    return (
        <header className="bg-cover bg-center flex-shrink-0 h-[10vh] text-white relative" style={{ backgroundImage: `url(${header})` }}>
            <div className="absolute inset-0 flex items-center justify-center">
                <img className="w-[70px] h-[80px] mr-4" src={logo1} alt="" />
                <h1 className="text-6xl text-white">Espresso Emporium</h1>
            </div>
        </header>
    );
}

export default Header;
