
import backgroundImage from "../assets/images/more/1.png";
import cup from "../assets/images/icons/Vector.png";


import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Coffee from "./Coffee";



const ProductPage = () => {

    const loadedCoffees = useLoaderData();
    const [coffees, setCoffees] = useState(loadedCoffees);


    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 1000
        });
    }, []);
    return (
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container space-y-10 md:my-12 mx-auto mt-8 ">
                <div className="flex flex-col items-center justify-center">
                    <p className=" font-sans">--- Sip & Savor ---</p>
                    <h2 className="text-5xl text-shadow font-bold text-[#331A15] mb-6">Our Popular Products</h2>
                    <Link to="/productForm">
                        <button className="p-2 flex items-center text-white text-xl justify-center rounded-md bg-[#E3B577] ">Add Coffee <img src={cup} className="ml-2" alt="" /></button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {coffees.map((coffee) =>
                        <Coffee
                            coffee={coffee}
                            coffees={coffees}
                            setCoffees={setCoffees}
                            key={coffee._id}
                        ></Coffee>)}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
