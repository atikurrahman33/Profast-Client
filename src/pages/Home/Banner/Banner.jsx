import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


const Banner = () => {
    return (


         <Carousel autoPlay={true} infiniteLoop={true} showArrows={false} showStatus={false} showIndicators={false} showThumbs={false} interval={3000}>
                <div>
                    <img src="/src/assets/banner/banner1.png" alt="" />
                    
                </div>
                <div>
                    <img src="/src/assets/banner/banner2.png" alt="" />
                    
                </div>
                <div>
                    <img src="/src/assets/banner/banner3.png" alt="" />
                    
                </div>
            </Carousel>
        
    );
};

export default Banner;