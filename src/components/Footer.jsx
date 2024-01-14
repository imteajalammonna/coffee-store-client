import backgroundImg from "../assets/images/more/13.jpg";
import footerBg from "../assets/images/more/24.jpg";
import logo from "../assets/images/more/logo1.png";
import { FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn } from "react-icons/md";
const Footer = () => {
    return (
        <footer >
            <div className="bg-gray-800  flex text-[#331A15] py-12 md:h-[700px]" style={{ backgroundImage: `url(${backgroundImg})` }}>
                <div className=" mx-5 w-11/12 flex md:flex-row flex-col-reverse items-center lg:container md:mx-auto md:justify-around">
                    <div className=" mb-6 md:w-2/4 md:mb-0 space-y-5 md:ml-16 md:space-y-7">
                        <div className="flex items-center">
                            <img className="w-16 mr-5" src={logo} alt="" />
                            <h4 className=" text-2xl md:text-5xl font-semibold text-shadow">Espresso Emporium</h4>
                        </div>
                        <p className="text-lg w-full md:text-2xl md:w-3/4">Always ready to be your friend. Come & Contact with us to share your memorable moments, to share with your best companion.</p>
                        <div className="flex space-x-5 text-[#331A15]">
                            <a href="#" className="text-[#331A15] text-3xl transition duration-300">
                                <FaFacebook></FaFacebook>
                            </a>
                            <a href="#" className="text-[#331A15] text-3xl transition duration-300">
                                <FaInstagram></FaInstagram>
                            </a>
                            <a href="#" className="text-[#331A15] text-3xl transition duration-300">
                                <FaTwitter></FaTwitter>
                            </a>
                            <a href="#" className="text-[#331A15] text-3xl transition duration-300">
                                <FaYoutube></FaYoutube>
                            </a>
                        </div>
                        <div className="text-[#331A15] text-lg space-y-3">
                            <h4 className="text-2xl md:text-4xl font-semibold mb-4 text-shadow">Get in Touch</h4>
                            <p className="text-sm md:text-xl flex items-center font-sans"><FaPhoneAlt className="mr-4"></FaPhoneAlt>+88 01533 333 333</p>
                            <p className="text-sm md:text-xl flex items-center font-sans"><MdEmail className="mr-4"></MdEmail> Email: info@example.com</p>
                            <p className="text-sm md:text-xl flex items-center font-sans"><MdLocationOn className="mr-4"></MdLocationOn>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>

                    <div className="mb-10 mt-5 md:ml-28 w-full  md:mb-0 md:mx-auto md:w-1/3 ">
                        <h4 className=" text-3xl text-center md:text-5xl font-semibold mb-16 text-shadow">Connect with Us</h4>
                        <form>
                            <div className="mb-4 ">
                                <input type="text" placeholder="Name" className="w-full p-2 border-gray-500 rounded" />
                            </div>
                            <div className="mb-4">
                                <input type="email" placeholder="Email" className="w-full p-2  border-gray-600 rounded" />
                            </div>
                            <div className="mb-4">
                                <textarea placeholder="Message" className="w-full p-2  border-gray-600 rounded" rows="4"></textarea>
                            </div>
                            <div className="flex justify-center items-center">
                                <button type="submit" className="button-footer">Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="h-[6vh]" style={{ backgroundImage: `url(${footerBg})` }}>
                <h3 className=" text-lg md:text-2xl flex justify-center pt-1 md:pt-3 text-white">Copyright Espresso Emporium ! All Rights Reserved</h3>
            </div>
        </footer>
    );
}

export default Footer;
