import Companies from "./Components/Companies";
import Guide from "./Components/Guide";
import Hero from "./Components/Hero";
import Properties from "./Components/Properties";
import Details from "./Components/Details";
import GetStarted from "./Components/GetStarted";
import Footer from "./Components/Footer";
import AboutAmus from "./Components/AboutAmus";
import GridComponent from "./Components/GridComponent";
import CountComp from "./Components/CountComp";

function App() {
  return (
    <>
      <Hero />
      <Properties />
      <Details />
      <AboutAmus/>
      <GridComponent/>
      <CountComp/>
      {/* <Companies />
      <Guide />
      <GetStarted /> */}
      <Footer />
    </>
  );
}

export default App;
