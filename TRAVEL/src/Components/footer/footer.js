import "./footer.css";
const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-4">
              <h6>Important Terms</h6>
              <i className="fas fa-arrow-right">
                <a href="#">Lorem, ipsum.</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">Lorem, ipsum.</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">Lorem, ipsum.</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">Lorem, ipsum.</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">Lorem, ipsum.</a>
              </i>
            </div>

            <div className="col-sm-4">
              <h6>Important Dates</h6>
              <i className="fas fa-arrow-right">
                <a href="#">1 Aprail 2022</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">2 Aprail 2022</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">3 Aprail 2022</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">4 Aprail 2022</a>
              </i>
            </div>

            <div className="col-sm-4">
              <h6>Important Links</h6>
              <i className="fas fa-arrow-right">
                <a href="#">Home</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">About</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">Services</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">Login</a>
              </i>
              <i className="fas fa-arrow-right">
                <a href="#">Contact</a>
              </i>
            </div>
          </div>
        </div>
        <div className="custom_content">
          <h6>Easy Coding Tutorial</h6>
        </div>
      </footer>
    </>
  );
};

export default Footer;
