import google from "../../../assets/brands/amazon.png";
import amazon from "../../../assets/brands/amazon_vector.png";
import microsoft from "../../../assets/brands/casio.png";
import meta from "../../../assets/brands/moonstar.png";
import netflix from "../../../assets/brands/randstad.png";
import netf from "../../../assets/brands/start-people 1.png";
import netfl from "../../../assets/brands/start.png";

const ClientLogos = () => {
  return (
    <div className=" py-16">

      {/* Section Title */}
      <h2 className="text-3xl font-extrabold text-center mb-10 text-gray-800">
        We've helped thousands ofsales teams
      </h2>

      {/* Marquee */}
      <marquee
        direction="right"
        scrollAmount="6"
        behavior="scroll"
        className="flex items-center"
        onMouseOver={(e) => e.target.stop()}
        onMouseOut={(e) => e.target.start()}
      >
        <div className="flex items-center gap-16">
            <img src={microsoft} alt="Microsoft" className="h-6 " />
          <img src={google} alt="Google" className="h-6 " />
          <img src={amazon} alt="Amazon" className="h-6 " />
          <img src={meta} alt="Meta" className="h-6 " />
          <img src={netflix} alt="Netflix" className="h-6 " />
          <img src={netf} alt="Netflix" className="h-6 " />
          <img src={netfl} alt="Netflix" className="h-6 " />
          
        </div>
      </marquee>

    </div>
  );
};

export default ClientLogos;
