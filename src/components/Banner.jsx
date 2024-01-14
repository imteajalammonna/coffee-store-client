import banner from "../assets/images/more/3.png"

const Banner = () => {
    return (
        <div className=" bg-cover object-cover min-h-[93vh]" style={{ backgroundImage: `url(${banner})` }}>
            <div className="container mx-auto text-white px-7 pt-56 md:pl-[80px] lg:pl-[120px] space-y-6 xl:pl-[640px]">
                <h1 className="text-3xl lg:text-6xl lg:pt-[10px] xl:pt-[120px]">Would you like a Cup of Delicious Coffee?</h1>
                <p className="text-lg md:text-xl font-serif lg:w-[850px]">It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="button">Learn More</button>
            </div>
            
        </div>
    );
};

export default Banner;