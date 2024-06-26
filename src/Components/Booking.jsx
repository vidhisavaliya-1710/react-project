import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Reservation from './Reservation';
function Booking() {
  return (
    <>
      <div className="bg_about mb-5">
                <div className="about_page text-center">
                        <h1 className="text-light fw-bolder mb-4">Booking</h1>

                        <Breadcrumb className='d-flex justify-content-center fs-5'>
                            <Breadcrumb.Item href="#">HOME </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                PAGES 
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className='about_active'>BOOK</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
            </div>

            <Reservation/>
    </>
  )
}

export default Booking;
