import Coffee8 from "../assets/images/cups/Rectangle 9.png";
import Coffee1 from "../assets/images/cups/Rectangle 10.png";
import Coffee2 from "../assets/images/cups/Rectangle 11.png";
import Coffee3 from "../assets/images/cups/Rectangle 12.png";
import Coffee4 from "../assets/images/cups/Rectangle 13.png";
import Coffee5 from "../assets/images/cups/Rectangle 14.png";
import Coffee6 from "../assets/images/cups/Rectangle 15.png";
import Coffee7 from "../assets/images/cups/Rectangle 16.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const photosData = [
    { image: Coffee1, animation: "fade-right" },
    { image: Coffee2, animation: "fade-down" },
    { image: Coffee3, animation: "fade-down" },
    { image: Coffee4, animation: "fade-left" },
    { image: Coffee5, animation: "fade-right" },
    { image: Coffee6, animation: "fade-up" },
    { image: Coffee7, animation: "fade-up" },
    { image: Coffee8, animation: "fade-left" },
];

const CoffeesPhotos = () => {
    useEffect(() => {
        AOS.init({
            offset: 300,
            duration: 1000
        });
    }, []);

    return (
        <section className=" min-h-screen mt-10">
            <div className="container mx-auto">
                <p className="text-center font-sans mb-2">Follow Us Now</p>
                <h2 className="text-5xl font-bold mb-10 text-center">Follow on Instagram</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-6 md:mx-24">
                    {photosData.map((photo, index) => (

                        <img data-aos={photo.animation} key={index} src={photo.image} alt={`coffees photo`} className="md:w-[312px] md:h-[330px]" />

                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoffeesPhotos;
