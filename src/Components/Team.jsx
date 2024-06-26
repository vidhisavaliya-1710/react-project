function Team(teampage){
    return(
        <>
            <div className="spacer sev_sec mb-5">
                    <div className="container">
                        <div className="team_sec text-center">
                            <h4 className="fw-bold">Team Members</h4>
                            <h1 className="fw-bold">Our Master Chefs</h1>
                        </div>
                        <div className="row gx-4">
                            {
                                teampage.teamsec.teams.map((item)=>{
                                    return(
                                        <div className="col-lg-3 col-md-6 col-12 team_detail">
                                            <div className="bg-white text-center py-3 px-3">
                                                <div className='rounded-circle py-3'>
                                                    <img src={item.teamimg} alt="" className='team_img'/>
                                                </div>
                                                <h5 className='fw-bold'>{item.name}</h5>
                                                <small className='fs-6 fw-medium'>{item.des}</small>
                                                <div className="mt-4 d-flex justify-content-center social_sec">
                                                <a href="" className="btn-square mx-1 p-3 rounded-top-5 fs-5">{item.icon1}</a>
                                                <a href="" className="btn-square mx-1 p-3 rounded-top-5 fs-5">{item.icon2}</a>
                                                <a href="" className="btn-square mx-1 p-3 rounded-top-5 fs-5">{item.icon3}</a>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            } 
                        </div>
                    </div>
            </div>
        </>
    );
}
export default Team;