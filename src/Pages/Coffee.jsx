import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const Coffee = ({ coffee, coffees, setCoffees }) => {
    //taste, category, details,
    const { _id, name, supplier, chef, price, photo } = coffee;

    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://coffee-store-server-9ksmicv77-monnas-projects.vercel.app//coffee/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Coffee has been deleted.",
                                icon: "success"
                            })

                            const remaining = coffees.filter(cof => cof._id !== _id);
                            setCoffees(remaining)
                        }
                    })
            }
        });
    }

    return (
        <div data-aos="fade-down"
            className="justify-around md:space-x-10
                        grid grid-cols-2 md:grid-cols-3 p-4 m-2 rounded-lg bg-[#F5F4F1] bg-opacity-75"
        >

            <img src={photo} alt={name} className="" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:mt-6 md:col-span-2 ">
                <div className="md:col-span-1 w-full">
                    <h3 className="text-xl font-sans font-bold mb-2">Name: <span>{name}</span></h3>
                    <p className="font-bold font-sans mb-2">Supplier: <span>{supplier}</span></p>
                    <p className="mb-4 font-sans font-bold">Chef: <span>{chef}</span></p>
                    <p className="mb-4 font-sans font-bold">Price: <span>{price} TK</span></p>
                </div>
                <div className="md:col-span-1 grid grid-cols-3 md:grid-cols-1 md:ml-[100px] gap-6">
                    <Link to="/details">
                        <button className="bg-[#E3B577] text-white w-4 h-4 p-3 rounded">
                            <FaEye />
                        </button>
                    </Link>
                    <Link to={`/updateCoffee/${_id}`}>
                        <button className="bg-black text-white w-4 h-4 mr-4 p-3 rounded">
                            <MdEdit />
                        </button>
                    </Link>
                    <button onClick={() => handleDelete(_id)} className="bg-red-500 text-white w-4 h-4 p-3 rounded hover:bg-red-600">
                        <MdDelete />
                    </button>
                </div>
            </div>

        </div>
    );
};

Coffee.propTypes = {
    coffee: PropTypes.object.isRequired,
    coffees: PropTypes.array.isRequired,
    setCoffees: PropTypes.func.isRequired,
}

export default Coffee;