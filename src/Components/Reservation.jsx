import { FaPlay } from "react-icons/fa";
function Reservation(){
    return(
        <>
            
                <div className="row g-0 spacer">
                    <div className="col-md-6 col-sm-12">
                        <div className="video position-relative">
                                <button type="button" className="btn-play border-0 p-4 position-absolute top-50 play_btn">
                                    <FaPlay className="fs-1 text-dark"/>
                                </button>
                        </div>
                    </div>
                    <div className="col-md-6 bg-dark col-sm-12">
                        <div className="p-5 reservation_sec">
                            <h5 className="section_txt fw-medium">Reservation</h5>
                            <h1 class="text-white mb-4 fw-bold">Book A Table Online</h1>
                            <form action="">
                                <div className="row g-3">
                                        <div className="col-md-6">
                                            <div className="form_floating position-relative">
                                                <input type="text" className="form-control" placeholder="Your Name"/>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form_floating">
                                                <input type="email" className="form-control" placeholder="Your Email"/>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form_floating">
                                                <input type="date" className="form-control datetimepicker-input" placeholder="Date & Time"/>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form_floating">
                                                <select name="" id="" className="form-select">
                                                    <option value="1">People 1</option>
                                                    <option value="2">People 2</option>
                                                    <option value="3">People 3</option>
                                                </select>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form_floating">
                                                <textarea name="" id="" className="form_control" placeholder="Special Request" style={{height:'100px',width:'100%'}}></textarea>
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                        <button class="btn btn-primary w-100 py-3 btn1" type="submit">Book Now</button>
                                        </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            
        </>
    );
}
export default Reservation;