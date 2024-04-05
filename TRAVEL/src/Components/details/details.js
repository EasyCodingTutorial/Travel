import './details.css'
const Details = () => {
    return (
        // Details 
        <>
           
            <div className="container details">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="box">
                            <i class="fa-solid fa-plane"></i>
                            <h6>Air Ticketing</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, in repudiandae nostrum unde quis ratione tempore modi commodi dolorem mollitia incidunt quia sunt est accusantium dolorum nulla sapiente consectetur amet.</p>
                            <a href="">Learn More</a>
                         </div>
                         
                    </div>

                    <div className="col-sm-4 mid">
                        <div className="box">
                        <i class="fa-solid fa-location-pin"></i>
                            <h6>Packages Details</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, in repudiandae nostrum unde quis ratione tempore modi commodi dolorem mollitia incidunt quia sunt est accusantium dolorum nulla sapiente consectetur amet.</p>
                            <a href="">Learn More</a>
                         </div>
                         
                    </div>


                    <div className="col-sm-4">
                        <div className="box">
                        <i class="fa-solid fa-headphones"></i>
                            <h6>24/7 Support</h6>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, in repudiandae nostrum unde quis ratione tempore modi commodi dolorem mollitia incidunt quia sunt est accusantium dolorum nulla sapiente consectetur amet.</p>
                            <a href="">Learn More</a>
                         </div>
                         
                    </div>

                 </div>
            </div>

        </>
     )
}
export default Details;