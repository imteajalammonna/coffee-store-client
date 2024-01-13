import icon1 from "../assets/images/icons/1.png"
import icon2 from "../assets/images/icons/2.png"
import icon3 from "../assets/images/icons/3.png"
import icon4 from "../assets/images/icons/4.png"

const Features = () => {
    const featuresData = [
        { image: icon1 , title: 'Awesome Aroma', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
        { image: icon2, title: 'High Quality', description: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
        { image: icon3, title: 'Pure Grades', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
        { image: icon4, title: 'Proper Roasting', description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.' },
    ];

    return (
        <section className="bg-[#ECEAE3] h-80 py-16">
            <div className="container mx-auto text-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className=" p-6 rounded-lg shadow-xl flex items-center justify-center flex-col">
                            <img className="w-16 mb-4" src={feature.image} alt="" /> 
                            <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
