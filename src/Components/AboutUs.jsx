import Breadcrumb from 'react-bootstrap/Breadcrumb';
import About_sec from './About_sec';
import Team from './Team';

function AboutUs(props){
    return(
        <>
            <div className="bg_about mb-5">
                <div className="about_page text-center">
                        <h1 className="text-light fw-bolder mb-4">About Us</h1>

                        <Breadcrumb className='d-flex justify-content-center fs-5'>
                            <Breadcrumb.Item href="#">HOME </Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                PAGES 
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className='about_active'>ABOUT</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
            </div>
                <About_sec/>
                <Team  teamsec={props}/>
            
        </>
    );
}
export default AboutUs;