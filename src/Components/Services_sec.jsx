import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Services from './Services';

function Services_sec(props){
    return( 
        <>
            <div className="bg_about mb-5">
                <div className="about_page text-center">
                        <h1 className="text-light fw-bolder mb-4">Services</h1>

                        <Breadcrumb className='d-flex justify-content-center fs-5'>
                            <Breadcrumb.Item href="#">HOME </Breadcrumb.Item>
                            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                PAGES 
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className='about_active'>SERVICES</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
            </div>

            <Services  sec={props}/>
        </>
    );
}
export default Services_sec;