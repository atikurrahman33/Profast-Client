import Banner from "../Banner/Banner";
import ClientLogos from "../ClientLogosMarquee/ClientLogos";
import ExtraIntroduce from "../ExtraIntroduce/ExtraIntroduce";
import HowWork from "../HowWork/HowWork";
import Service from "../Service/Service";
import Merchant from "../Merchant/Merchant";
import Faq from "../Faqs/Faq";
import ReviewCarousel from "../ReviewCarousel/ReviewCarousel";



const Home = () => {
    return (
        <div className="">
            <Banner />
            <HowWork />
            <Service />
            <ClientLogos />
            <ExtraIntroduce />
            <Merchant/>
            <ReviewCarousel/>
            <Faq/>
            
        </div>
    );
};

export default Home;