import image1 from "../../images/desti1.jpg";
import image2 from "../../images/desti2.jpg";
import image3 from "../../images/desti3.jpg";
import image4 from "../../images/desti4.jpg";
import image5 from "../../images/desti5.jpg";
import image6 from "../../images/desti6.jpg";
import "./desti.css";
const Desti = () => {
  return (
    <>
      <div className="container desti">
        <div className="content">
          <h6>Destination</h6>
          <p>Lorem ipsum dolor sit amet consectetur.</p>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={image1} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Opera House, Austraila</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image2} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Opera House, Austraila</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image3} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Opera House, Austraila</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={image4} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Opera House, Austraila</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image5} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Opera House, Austraila</h4>
              </div>
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={image6} className="img-fluid" alt="" />
              <div className="Content">
                <h5>$700</h5>
                <h4>Opera House, Austraila</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Desti;
