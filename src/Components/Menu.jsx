import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Food from './Food';
function Menu(props){
    return(
        <>
            <div className="bg_about mb-5">
                <div className="about_page text-center">
                        <h1 className="text-light fw-bolder mb-4">Food Menu</h1>

                        <Breadcrumb className='d-flex justify-content-center fs-5'>
                            <Breadcrumb.Item href="#">HOME </Breadcrumb.Item>
                            <Breadcrumb.Item href="">
                                PAGES 
                            </Breadcrumb.Item>
                            <Breadcrumb.Item className='about_active'>MENU</Breadcrumb.Item>
                        </Breadcrumb>
                </div>
            </div>

            <Food  foodsec={props}/>
        </>
    );
}
export default Menu;