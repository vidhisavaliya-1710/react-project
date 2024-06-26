import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { FaEnvelopeOpen } from "react-icons/fa";
function Contact() {
  return (
    <>
      <div className="bg_about mb-5">
                <div className="about_page text-center">
                        <h1 className="text-light fw-bolder mb-4">Contact Us</h1>

                        <Breadcrumb className='d-flex justify-content-center fs-5'>
                            <Breadcrumb.Item href="#">HOME </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                PAGES 
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className='about_active'>CONTACT</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
            </div>

            <div className="container spacer">
            <div className="team_sec text-center">
                            <h4 className="fw-bold">Contact Us</h4>
                            <h1 className="fw-bold">Contact For Any Query</h1>
                        </div>
              <div className="row">
                <div className="col-md-4 Contact_sec mt-5">
                <h3 className="mb-4 fw-bold fs-5">Booking</h3>
                
                <FaEnvelopeOpen className='fs-5' style={{color:'#FEA116'}}/><span className='fs-5 ps-2 pt-5' style={{color:'#888'}}>book@example.com</span>
              
                </div>
                <div className="col-md-4 Contact_sec mt-5">
                <h3 className="mb-4 fw-bold fs-5">General</h3>
                
                <FaEnvelopeOpen className='fs-5' style={{color:'#FEA116'}}/><span className='fs-5 ps-2 pt-5' style={{color:'#888'}}>info@example.com</span>
              
                </div>
                <div className="col-md-4 Contact_sec mt-5">
                <h3 className="mb-4 fw-bold fs-5">Technical</h3>
                
                <FaEnvelopeOpen className='fs-5' style={{color:'#FEA116'}}/><span className='fs-5 ps-2 pt-5' style={{color:'#888'}}>tech@example.com</span>
              
                </div>
                <div className="col-md-6 mt-5">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d59301.64782376013!2d72.96234421580235!3d21.727836869502603!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be020a2b22ac421%3A0xa4116c424622fd2a!2sBharuch%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1715231837486!5m2!1sen!2sin" width="600" height="450" style={{border:'0'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className="col-md-6 mt-5">
                <form action="">
                                <div className="row g-4">
                                        <div className="col-md-6">
                                            <div className="form_floating position-relative">
                                                <input type="text" className="form-control p-3" placeholder="Your Name"/>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form_floating">
                                                <input type="email" className="form-control p-3" placeholder="Your Email"/>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form_floating">
                                                <input type="date" className="form-control datetimepicker-input p-3" placeholder="Date & Time"/>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                        <div className="form_floating">
                                                <select name="" id="" className="form-select p-3">
                                                    <option value="1">People 1</option>
                                                    <option value="2">People 2</option>
                                                    <option value="3">People 3</option>
                                                </select>
                                               
                                            </div>
                                        </div>
                                        <div className="col-md-12">
                                            <div className="form_floating">
                                                <textarea name="" id="" className="form_control p-3" placeholder="Special Request" style={{height:'180px',width:'100%',border:'1px solid #ced4da'}}></textarea>
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
  )
}

export default Contact
