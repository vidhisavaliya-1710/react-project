import { Col, Container, Row } from "react-bootstrap";
import { FaUtensils } from "react-icons/fa";
import Button from 'react-bootstrap/Button';

function About_sec(){
    return(
        <>
           <div className="spacer container">
                <Container>
                    <Row>
                        <Col lg={6}>
                            <Row className="g-3">
                                <Col className="text-start">
                                    <img src={require('../images/asset 1.jpeg')} alt="" className="about_img ms-3 img-fluid rounded"/>
                                </Col>
                                <Col className="text-start">
                                    <img src={require('../images/asset 2.jpeg')} alt="" className="w-75 mt-5 me-5 img-fluid rounded"/>
                                </Col>
                            </Row>

                            <Row className="g-3">
                                <Col className="text-end">
                                    <img src={require('../images/asset 3.jpeg')} alt="" className="w-75 mb-5 ms-5 mt-4 img-fluid rounded" />  
                                </Col>
                                <Col className="text-end">
                                    <img src={require('../images/asset 4.jpeg')} alt=""  className="about_img me-3 mt-4 img-fluid rounded"/>
                                </Col>
                            </Row>
                        </Col>
                        <Col className="about_txt" lg={6}>
                            <h4>about Us</h4>
                            <h1 className="fw-bolder">Welcome to <FaUtensils className='pe-2 mt-0 fs-1' style={{fontSize:'50px',color:'#FEA116'}}/>Restoran</h1>
                            <p className="fs-5 mt-3">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                            <p className="fs-5 mt-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Row className="mt-5">
                                <Col className="about_cnt d-flex">
                                    <h1 className="fw-bold me-4 ms-3">15</h1>
                                    <span>
                                        <p className="fs-5">Year of</p>
                                        <h6 className="fs-5 fw-bold lh-1">EXPERIENCE</h6>
                                    </span>
                                </Col>
                                <Col className="about_cnt d-flex">
                                    <h1 className="fw-bold me-4 ms-3">50</h1>
                                    <span>
                                        <p className="fs-5">Popular</p>
                                        <h6 className="fs-5 fw-bold">MASTER CHEFS</h6>
                                    </span>
                                </Col>
                            </Row>
                            <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2 mt-4 fs-5 fw-medium btn border-0 rounded-0'>READ MORE</Button>{' '}
                        </Col>
                    </Row>
                </Container>
           </div>
        </>
    );
}
export default About_sec;