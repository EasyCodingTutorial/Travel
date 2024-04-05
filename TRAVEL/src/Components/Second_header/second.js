import SecondHeader from "../../images/second_header.jpg";
import "./second.css";
const Second = () => {
  return (
    // Second Header Start,
    <>
      <div className="second_header">
        <div className="img">
          <div>
            <img src={SecondHeader} className="img-fluid" alt="" />
          </div>
          <div className="Overlay"></div>
        </div>
        <div className="Content">
          <h6>Experience the Beauty of World With us</h6>
        </div>
      </div>
    </>
  );
};
export default Second;
