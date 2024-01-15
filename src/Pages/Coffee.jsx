import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import PropTypes from 'prop-types';
import Swal from "sweetalert2";

const Coffee = ({ coffee }) => {
    //taste, category, details,
    const { _id, name, chef, supplier, photo } = coffee;

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

                fetch(`http://localhost:5000/coffee/${_id}`, {
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
                            });
                        }
                    })
            }
        });
    }

    return (
        <div data-aos="fade-down" className="bg-[#F5F4F1] bg-opacity-75  md:p-4 flex md:justify-between  rounded-lg">
            <img src={photo} alt={name} className=" mb-4 rounded-md" />
            <div className="font-sans flex flex-col justify-center">
                <h3 className="text-xl font-sans font-bold mb-2">Name: <span> {name}</span></h3>
                <p className="text-gray-600 mb-2">{supplier}</p>
                <p className="text-gray-500 mb-4 font-bold">Chef: {chef}</p>
            </div>
            <div className="flex justify-center items-center flex-col space-y-5 mx-16">
                <button className="bg-[#E3B577] text-white px-3 py-3 rounded "><FaEye></FaEye></button>
                <button className="bg-black text-white px-3 py-3 rounded"><MdEdit></MdEdit></button>
                <button onClick={() => handleDelete(_id)} className="bg-red-500 text-white px-3 py-3 rounded hover:bg-red-600"><MdDelete></MdDelete></button>
            </div>
        </div>
    );
};

Coffee.propTypes = {
    coffee: PropTypes.object.isRequired
}

export default Coffee;