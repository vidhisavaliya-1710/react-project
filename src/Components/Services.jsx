import { Col, Container, Row } from "react-bootstrap";

function Services(section){
    return(
        <>
            <div className="sev_sec">
            <div className="spacer container">
                    <Container>
                        <Row className="gx-4">
                            {
                                section.sec.sericves.map((item)=>{
                                    return(
                                        <Col className="detaile_sec" style={{color:'#FEA116'}} lg={3} md={6}>
                                             <div className="py-4 px-3  service_sec">
                                                    <div className="fs-1 icon_sec">{item.icon}</div>
                                                    <h4 className="text-dark mt-2 fw-bold">{item.name}</h4>
                                                    <p className="fs-4">{item.content}</p>
                                             </div>
                                       </Col>
                                    )
                                })
                            }
                           
                        </Row>
                    </Container>
            </div>
            </div>
        </>
    );
}
export default Services;