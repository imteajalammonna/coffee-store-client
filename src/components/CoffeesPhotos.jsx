import Coffee8 from "../assets/images/cups/Rectangle 9.png"
import Coffee1 from "../assets/images/cups/Rectangle 10.png"
import Coffee2 from "../assets/images/cups/Rectangle 11.png"
import Coffee3 from "../assets/images/cups/Rectangle 12.png"
import Coffee4 from "../assets/images/cups/Rectangle 13.png"
import Coffee5 from "../assets/images/cups/Rectangle 14.png"
import Coffee6 from "../assets/images/cups/Rectangle 15.png"
import Coffee7 from "../assets/images/cups/Rectangle 16.png"

const photosData = [
    { image: Coffee1 },
    { image: Coffee2 },
    { image: Coffee3 },
    { image: Coffee4 },
    { image: Coffee5 },
    { image: Coffee6 },
    { image: Coffee7 },
    { image: Coffee8 },
];

const CoffeesPhotos = () => {

    return (
        <section className="bg-gra-100 py-12">
            <div className="container mx-auto">
                <p className="text-center font-sans mb-2">Follow Us Now</p>
                <h2 className="text-5xl font-bold mb-10 text-center">Follow on Instagram</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mx-14 md:mx-24">
                    {photosData.map((photo, index) => (

                        <img key={index} src={photo.image} alt={`Photo ${index + 1}`} className=" md:w-[312px] md:h-[330px]" />

                    ))}
                </div>
            </div>
        </section>
    );
}

export default CoffeesPhotos;
