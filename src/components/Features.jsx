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
        <section className="bg-[#ECEAE3]  md:h-[700px] lg:h-[650px] xl:h-[400px] py-16">
            <div className="md:container mx-auto text-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="m-5 p-6  flex items-center justify-center flex-col md:m-5">
                            <img className="w-16 mb-4" src={feature.image} alt="" /> 
                            <h3 className="text-3xl font-bold mb-2">{feature.title}</h3>
                            <p className="text-gray-600 text-xl">{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Features;
