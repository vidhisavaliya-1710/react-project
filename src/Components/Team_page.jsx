import React from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Team from './Team';
function Team_page(props) {
  return (
    <>
      <div className="bg_about mb-5">
                <div className="about_page text-center">
                        <h1 className="text-light fw-bolder mb-4">Our Team</h1>
                        
                        <Breadcrumb className='d-flex justify-content-center fs-5'>
                            <Breadcrumb.Item href="#">HOME </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                PAGES 
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className='about_active'>TEAM</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
            </div>

            <Team teamsec={props}/>
    </>
  )
}

export default Team_page
