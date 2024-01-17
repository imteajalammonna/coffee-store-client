import BGIMG from "../assets/images/more/11.png"
import Arrow from "../assets/images/icons/Frame.png"
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
const ProductForm = () => {


    const handleSubmit = (e) => {
        e.preventDefault();

        const form = e.target;

        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const price = form.price.value;
        const photo = form.photo.value;

        const newCoffee = { name, chef, supplier, taste, category, price, photo }
        console.log(newCoffee);

        fetch("https://coffee-store-server-9ksmicv77-monnas-projects.vercel.app//coffee", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'You have added successfully!',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    };

    return (
        <div className="bg-no-repeat bg-cover" style={{ backgroundImage: `url(${BGIMG})` }}>
            <div className="container mx-auto min-h-screen">
                <Link to="/"> <h2 className="text-xl ml-80 text-shadow flex items-center my-4"><img className="w-5 h-5 mr-2" src={Arrow} alt="" /> Back to Home</h2></Link>
                <form onSubmit={handleSubmit} className="max-w-4xl mx-auto p-14 bg-[#F4F3F0]">
                    <div className="text-center">
                        <h2 className="text-3xl mb-4 text-shadow font-bold">Add New Coffee</h2>
                        <p className="font-sans mb-10">It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="name" className="block text-gray-700">Name:</label>
                            <input placeholder="Coffee Name" type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="chef" className="block text-gray-700">Chef:</label>
                            <input placeholder="Chef" type="text" id="chef" name="chef" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="supplier" className="block text-gray-700">Supplier:</label>
                            <input placeholder="Supplier" type="text" id="supplier" name="supplier" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="taste" className="block text-gray-700">Taste:</label>
                            <input placeholder="Taste" type="text" id="taste" name="taste" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                        <div>
                            <label htmlFor="category" className="block text-gray-700">Category:</label>
                            <input placeholder="Category" type="text" id="category" name="category" className="w-full px-4 py-2 border rounded-md" />
                        </div>
                        <div>
                            <label htmlFor="price" className="block text-gray-700">Price:</label>
                            <input placeholder="Price" id="price" name="price" className="w-full px-4 py-2 border rounded-md"></input>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700">Photo</label>
                        <input placeholder="Photo" type="text" id="photo" name="photo" className="w-full bg-white px-4 py-2 border rounded-md" />
                    </div>
                    <div>
                        <button type="submit" className="button w-full">Add New Coffee</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ProductForm;
