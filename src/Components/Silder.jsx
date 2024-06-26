import { Col, Container, Row } from "react-bootstrap";
import Button from 'react-bootstrap/Button';

function Silder(){
    return(
        <>
        <div className="bg_color">
            <div className="p-5">
                <Container>
                    <Row>
                        <Col className="text-white silder" md={12} lg={6} sm={12}>
                            <h1 className="fw-bolder mt-5">Enjoy Our <br/>Delicious Meal</h1>
                            <p className="fs-5">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <Button variant="primary" className='ps-4 pe-4 pt-2 pb-2 mt-4 fs-4 fw-medium btn border-0 rounded-0'>BOOK A TABLE</Button>{' '}
                        </Col>
                        <Col className="text-white"  md={12} lg={6} sm={12}>
                            <img src={require('../images/asset 0.png')} alt="" className="silder_img"/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
        </>
    );
}
export default Silder;