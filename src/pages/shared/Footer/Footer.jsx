import ProfastLogo from "../ProfastLogo/ProfastLogo";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const Footer = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-neutral text-neutral-content p-10">
                <aside>
                   <ProfastLogo />
                    <p className=" text-lg">
                        Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to <br />
                        business shipments — we deliver on time, every time.
                    </p>
                   <div className="text-lg flex justify-center gap-6 mt-8">
                    <p>Services</p>
                    <p>Coverage</p>
                    <p>About Us</p>
                    <p>Pricing</p>
                    <p>Blog</p>
                    <p>Contact</p>
                   </div>
                </aside>
                <nav>
                    <div className="">
                        <div className="flex justify-center gap-4"> 
                            <FaLinkedin className="w-8 h-8 "/>
                            <FaFacebook className="w-8 h-8" />
                            <FaTwitter className="w-8 h-8" />
                            <FaYoutube className="w-8 h-8" />
                        </div>
                       

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;