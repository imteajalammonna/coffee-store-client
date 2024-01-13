import banner from "../assets/images/more/3.png"

const Banner = () => {
    return (
        <div className=" bg-cover object-cover min-h-[93vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container mx-auto text-white md:pl-[700px] space-y-6">
                <h1 className="text-5xl md:pt-[250px]">Would you like a Cup of Delicious Coffee?</h1>
                <p className="text-xl font-serif w-[850px]">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="button">Learn More</button>
            </div>
            
        </div>
    );
};

export default Banner;