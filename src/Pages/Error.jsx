import errorImage from '../assets/images/404/404.gif';
import Footer from '../components/Footer';
import Header from '../components/Header';

const ErrorPage = () => {
    return (
        <>
        <Header></Header>
        <div className="flex max-h-[93vh] flex-col items-center justify-center h-screen">
            <div className="text-center">
                <img src={errorImage} alt="Error Illustration" className="mt-0" />
                <p className="text-6xl font-extrabold">Page Not Found</p>
                <p className="text-gray-600 text-3xl mb-8 mt-2">Sorry, the page you are looking for might be unavailable.</p>
                <a href="/" className="button-footer mt-8  rounded-full p-3">Go back to home</a>
            </div>
            
        </div>
        <Footer></Footer>
        </>
    );
}

export default ErrorPage;
