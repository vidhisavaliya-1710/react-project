import { RiCupFill } from "react-icons/ri";
import { FaHamburger, FaUtensils } from "react-icons/fa";

function Food(foodpage) {
  return (
    <>

      <div className="spacer container">
        <div className="food_sec text-center">
          <h4 className="fw-bold">Food Menu</h4>
          <h1 className="fw-bold">Most Popular Items</h1>
        </div>
        <div className="mt-5 pt-3 w-100">
          <div className="d-flex justify-content-center mb-5 food_contant">
          <ul class="nav nav-pills" id="myTab" role="tablist">
            
            <li class="nav-item" role="presentation">
              <button class="nav-link d-flex align-items-center text-start mx-3 ms-0 pb-3" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                <RiCupFill className="fs-1 tab_icon" />
                <span className="tab_sec ms-3">
                  <p className="fw-medium">Popular</p>
                  <h6 className="fw-bold fs-5 text-dark">Breakfast</h6>
                </span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link  d-flex align-items-center text-start mx-3 ms-0 pb-3" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                <FaHamburger className="fs-1 tab_icon" />
                <span className="tab_sec ms-3">
                  <p className="fw-medium">Special</p>
                  <h6 className="fw-bold fs-5 text-dark">Launch</h6>
                </span>
              </button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link d-flex align-items-center text-start mx-3 ms-0 pb-3" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">
                <FaUtensils className="fs-1 tab_icon" />
                <span className="tab_sec ms-3">
                  <p className="fw-medium">Lovely</p>
                  <h6 className="fw-bold fs-5 text-dark">Dinner</h6>
                </span>
              </button>
            </li>
          </ul>
          </div>
          <div class="tab-content" id="myTabContent">
            <div class="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
              <div className="container">
                <div className="row">
                  {
                    foodpage.foodsec.foods.map((item)=>{
                      return(
                        <div className="col-lg-6 d-flex mb-3 food_detail">
                          <div>
                            <img src={item.img} alt="" />
                          </div>
                          <div className="ps-4 w-100">
                          <div className="d-flex justify-content-between">
                          <h4 className="fw-bold">{item.menu}</h4>
                          <span><h3 className="fw-bold fs-4" style={{color:'#FEA116'}}>{item.price}</h3></span>
                            </div>
                            <hr/>
                            <p><i>{item.content}</i></p>
                          </div>
                        </div>
                      )
                    })
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Food;