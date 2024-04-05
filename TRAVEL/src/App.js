import Navbar from "./Components/Navbar/navbar";
import Header from "./Components/Header/header";
import Custom from "./Components/custom/custom";
import Details from "./Components/details/details";
import Testi from "./Components/Testimonial/testi";
import Desti from "./Components/Destination/desti";
import Second from "./Components/Second_header/second";
import Footer from "./Components/footer/footer";
import "./App.css";
const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Custom />
      <Details />
      <Testi />
      <Desti />
      <Second />
      <Details />
      <Footer />
    </>
  );
};
export default App;
