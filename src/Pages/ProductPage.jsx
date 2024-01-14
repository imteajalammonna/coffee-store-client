import { FaEye } from "react-icons/fa";
import backgroundImage from "../assets/images/more/1.png";
import cup from "../assets/images/icons/Vector.png";
import img from "../assets/images/1.png";
import { MdDelete, MdEdit } from "react-icons/md";



const productsData = [
    {
        id: 1,
        imgSrc: '../assets/images/cups/Rectangle 10.png',
        title: 'Delicious Dish 1',
        price: '$9.99',
        chef: 'Chef John Doe',
    },
    {
        id: 2,
        imgSrc: 'path-to-product-2.jpg',
        title: 'Tasty Treat 2',
        price: '$12.99',
        chef: 'Chef Jane Smith',
    },
    {
        id: 3,
        imgSrc: 'path-to-product-3.jpg',
        title: 'Yummy Delight 3',
        price: '$15.99',
        chef: 'Chef Mark Johnson',
    },
    {
        id: 4,
        imgSrc: 'path-to-product-4.jpg',
        title: 'Flavorful Dish 4',
        price: '$11.99',
        chef: 'Chef Emily Davis',
    },
    {
        id: 5,
        imgSrc: 'path-to-product-5.jpg',
        title: 'Savory Creation 5',
        price: '$14.99',
        chef: 'Chef Alex Anderson',
    },
    {
        id: 6,
        imgSrc: 'path-to-product-6.jpg',
        title: 'Mouthwatering Delight 6',
        price: '$10.99',
        chef: 'Chef Sarah Johnson',
    },
];

const ProductPage = () => {
    return (
        <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="container space-y-10 my-16 mx-auto mt-8 ">
                <div className="flex flex-col items-center justify-center">
                    <p className=" font-sans">--- Sip & Savor ---</p>
                    <h2 className="text-5xl text-shadow font-bold text-[#331A15] mb-6">Our Popular Products</h2>
                    <button className="p-2 flex items-center text-white text-xl justify-center rounded-md bg-[#E3B577] ">Add Coffee <img src={cup} className="ml-2" alt="" /></button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {productsData.map((product) => (
                        <div key={product.id} className="bg-[#F5F4F1] bg-opacity-75  p-4 flex justify-between  rounded-lg">
                            <img src={img} alt={product.title} className=" mb-4 rounded-md" />
                            <div className="font-sans flex flex-col justify-center">
                                <h3 className="text-xl font-sans font-bold mb-2">Name: <span> {product.title}</span></h3>
                                <p className="text-gray-600 mb-2">{product.price}</p>
                                <p className="text-gray-500 mb-4 font-bold">Chef: {product.chef}</p>
                            </div>
                            <div className="flex justify-center items-center flex-col space-y-5 mx-16">
                                <button className="bg-[#E3B577] text-white px-3 py-1 rounded hover:bg-blue-600"><FaEye></FaEye></button>
                                <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"><MdEdit></MdEdit></button>
                                <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"><MdDelete></MdDelete></button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
