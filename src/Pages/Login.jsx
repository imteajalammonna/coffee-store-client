import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../components/AuthProvider";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Login = () => {

    const { createUser, signInWithGoogle } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const user = { email }
                fetch("https://coffee-store-server-9ksmicv77-monnas-projects.vercel.app/user", {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.insertedId) {
                            toast("You have logged in Successfully!");
                        }
                        console.log(data);
                    })
            })
            .catch(error => {
                console.error(error)
            });
    }
    const handleGoogleLogin = () => {
        signInWithGoogle();
    }
    return (
        <div className="bg-gray-400">
            <div className="hero  min-h-screen md:container md:mx-auto ">
                <div className="md:hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold mt-20">Login now!</h1>
                        <p className="py-6 md:w-[500px]">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card mx-auto shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleLogin} className="card-body  ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="button p-0 mb-4">Login</button>
                            </div>
                            <p>New to here? Please <Link to="/register" className="underline text-[#06d425]">Register here</Link> </p>
                        </form>
                        <div className="flex items-center justify-center text-4xl mb-8">
                            <button onClick={handleGoogleLogin} className="mx-3"><FcGoogle /></button>
                            <button className="mx-3"><FaGithub /></button>
                            <button className="mx-3 text-blue-600"><FaFacebook /></button>
                        </div>
                    </div>
                </div>
            </div>  <ToastContainer></ToastContainer>
        </div>
    );
};

export default Login;