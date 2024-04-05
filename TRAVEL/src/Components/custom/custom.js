import "./custom.css";
import Img1 from "../../images/custom1.jpg";
import Img2 from "../../images/custom2.jpg";
import Img3 from "../../images/custom3.jpg";
const Custom = () => {
  return (
    // Custom Section

    <>
      <div className="container custom">
        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <img src={Img1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <img src={Img3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Custom;
