import { FaAngleRight, FaEnvelope, FaFacebookF, FaTwitter,FaYoutube,FaLinkedinIn } from "react-icons/fa";
import { FaLocationDot,FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";
function Footer(){
    return(
        <>
            <footer>
                <div className="bg_sec">
                    <div className="spacer">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-3 foot_sec col-md-6">
                                <h3 className="mb-4 fw-bold">Company</h3>
                                <div className="text-light">
                                    <ul className="">
                                        <li className="mb-2"><a href=""><FaAngleRight className="pe-2 fs-5 text-white mb-2"/><span className="text-white">About Us</span></a></li>
                                        <li className="mb-2"><a href=""><FaAngleRight className="pe-2 fs-5 text-white"/><span className="text-white">Contact Us</span></a></li>
                                        <li className="mb-2"><a href=""><FaAngleRight className="pe-2 fs-5 text-white"/><span className="text-white">Reservation</span></a></li>
                                        <li className="mb-2"><a href=""><FaAngleRight className="pe-2 fs-5 text-white"/><span className="text-white">Privacy policy</span></a></li>
                                        <li className="mb-2"><a href=""><FaAngleRight className="pe-2 fs-5 text-white"/><span className="text-white">Terms & Condition</span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 foot_sec col-md-6">
                                <h3 className="mb-4 fw-bold">Contact</h3>
                                <div className="text-light mb-4">
                                <FaLocationDot className="me-4 fs-5"/><span className="foot_font">123 Street, New York, USA</span>
                                </div>
                                <div className="text-light mb-4 d-flex align-items-center">
                                <FaPhone className="me-4 fs-5"/><span className="foot_font">+012 345 67890</span>
                                </div>
                                <div className="text-light mb-4 d-flex align-items-center">
                                <FaEnvelope className="me-4 fs-5"/><span className="foot_font">info@example.com</span>
                                </div>
                                <div className="">
                                    <a href=""><FaTwitter className="text-light fs-1 border rounded-5 p-2 me-2 foot_icon"/></a>
                                    <a href=""><FaFacebookF className="text-light fs-1 border rounded-5 p-2 me-2 foot_icon"/></a>
                                    <a href=""><FaYoutube className="text-light fs-1 border rounded-5 p-2 me-2 foot_icon"/></a>
                                    <a href=""><FaLinkedinIn className="text-light fs-1 border rounded-5 p-2 me-2 foot_icon"/></a>
                                </div>
                            </div>
                            <div className="col-lg-3 foot_sec col-md-6">
                                <h3 className="mb-4 fw-bold">Opening</h3>
                                <h5 className="text-light fw-normal fs-4">Monday - Saturday</h5>
                                <p className="text-light">09AM - 09PM</p>

                                <h5 className="text-light fw-normal fs-4">Sunday</h5>
                                <p className="text-light">10AM - 08PM</p>
                            </div>
                            <div className="col-lg-3 foot_sec col-md-6">
                                <h3 className="mb-4 fw-bold">Newsletter</h3>
                                <p className="text-light fs-5">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                                <div className="position-relative">
                                    <form action="">
                                        <input type="text" className="form-control ps-3" placeholder="Your Email"/>
                                        <button className="btn position-absolute top-0 end-0 mt-2 me-3 text-light fs-6">SIGNUP</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                        
                    </div>
                    <hr style={{color:'#888'}}/>
                    <div className="bg_sec">
                        <div className="container">
                            <div className="row px-3 py-3">
                                
                               <div className="col-lg-6 text-light foot_detail col-md-6">
                                ©<Link href="" className="text-light pb-1">Your Site Name,</Link>All Right Reserved. Designed By <Link href="" className="text-light pb-1">HTML Codex</Link>
                         <br/><br/>   Distributed By <a href="" className="text-light pb-1">ThemeWagon</a>
                                </div>
                                <div className="col-lg-6 text-center col-md-6">
                                        <div className="d-flex justify-content-evenly">
                                            <a href="" className="text-light fs-5">Home</a>
                                            <a href="" className="text-light fs-5">Cookies</a>
                                            <a href="" className="text-light fs-5">Help</a>
                                            <a href="" className="text-light fs-5">FAQs</a>
                                        </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
                
            </footer>
        </>
    );
}
export default Footer;