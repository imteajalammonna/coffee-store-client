import Banner from "../components/Banner";
import CoffeesPhotos from "../components/CoffeesPhotos";
import Features from "../components/Features";
import ProductPage from "./ProductPage";

 

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Features></Features>
            <CoffeesPhotos></CoffeesPhotos>
            <ProductPage></ProductPage>
        </div>
    );
};

export default Home;