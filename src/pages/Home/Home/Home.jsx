import Banner from "../Banner/Banner";
import ClientLogos from "../ClientLogosMarquee/ClientLogos";
import HowWork from "../HowWork/HowWork";
import Service from "../Service/Service";



const Home = () => {
    return (
        <div className="">
            <Banner />
            <HowWork />
            <Service />
            <ClientLogos />
            
        </div>
    );
};

export default Home;