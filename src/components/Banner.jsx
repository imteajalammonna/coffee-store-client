import banner from "../assets/images/more/3.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Banner = () => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);
    return (
        <div className=" bg-cover min-h-[93vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container mx-auto text-white px-7 pt-56 md:pl-[80px] lg:pl-[120px] space-y-6 xl:pl-[640px]" >
                <h1 data-aos="fade-down" className="text-3xl lg:text-6xl lg:pt-[10px] xl:pt-[120px]">Would you like a Cup of Delicious Coffee?</h1>
                <p data-aos="fade-left" className="text-lg md:text-xl font-serif lg:w-[850px]">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button data-aos="fade-up" className="button btn-w">Learn More</button>
            </div>

        </div>
    );
};

export default Banner;