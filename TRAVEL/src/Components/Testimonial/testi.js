import image1 from "../../images/user1.jpg";
import image2 from "../../images/user2.jpg";
import image3 from "../../images/user3.jpg";
import "./testi.css";
const Testi = () => {
  return (
    <>
      <div className="testi container">
        <div className="content">
          <h6>Testimonial</h6>
        </div>

        <div className="row">
          <div className="col-sm-4">
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto cupiditate ad quod vitae nemo impedit sapiente
                necessitatibus tenetur dicta. Voluptatibus!
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <h5>Easy Coding</h5>
              <img src={image1} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4 mid">
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto cupiditate ad quod vitae nemo impedit sapiente
                necessitatibus tenetur dicta. Voluptatibus!
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <h5>Easy Coding</h5>
              <img src={image2} className="img-fluid" alt="" />
            </div>
          </div>

          <div className="col-sm-4">
            <div className="box">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Architecto cupiditate ad quod vitae nemo impedit sapiente
                necessitatibus tenetur dicta. Voluptatibus!
              </p>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <h5>Easy Coding</h5>
              <img src={image3} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Testi;
