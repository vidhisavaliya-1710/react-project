import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const option={
    loop:true,
    margin:20,
    center:true,
    autoplay:true,
	autoplayTimeout:4000,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:2,
        },
        1000:{
            items:3,
            loop:true
        }
}
}


function Client(clientpage){
    return(
        <>
            <div className="spacer">
                <div className="container">
                        <div className="team_sec text-center mb-5">
                            <h4 className="fw-bold">Testimonial</h4>
                            <h1 className="fw-bold">Our Clients Say!!!</h1>
                        </div>

                         <OwlCarousel className='owl-theme' {...option}>
                            {
                                clientpage.clientsec.clients.map((item)=>{
                                    return(
                                        <div class='item px-4 py-4'>
                                            <div className="fs-1 mb-3 client_icon" style={{color:'#FEA116'}}>{item.icon}</div>
                                            <p style={{color:'#888'}} className="fs-5">{item.detail}</p>
                                            <div className="d-flex align-items-center client_sec">
                                                <img src={item.cimg} alt=""  className="img-fluid object-fit-cover client_img flex-shrink-0"/>
                                                <div className="ps-3">
                                                <h5 className="fw-bold">{item.cname}</h5>
                                                <small className="fs-6" style={{color:'#888'}}>{item.cwork}</small>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                               
                            </OwlCarousel> 

                </div>
            </div>
        </>
    );
}
export default Client;