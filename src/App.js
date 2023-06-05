//import Hero from "./Components/Hero";
//import Properties from "./Components/Properties";
//import Details from "./Components/Details";
//import Footer from "./Components/Footer";
//import AboutAmus from "./Components/AboutAmus";
//import GridComponent from "./Components/GridComponent";
//import CountComp from "./Components/CountComp";

//import FullTime from "./Components/GetRemoteJob/FullTime";
//import GetHire from "./Components/GetRemoteJob/GetHire";
import Home from "./Components/Home/Home"
//import TechNon from "./Components/HireEmployerPage/TechNon";
import Getremote from "./Components/GetRemoteJob/Getremote";
//import GetHigh from "./Components/GetRemoteJob/GetHigh";
//import Employee from "./Components/HireEmployerPage/Employee";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import EmployeeMain from "./Components/HireEmployerPage/index/EmployeeMain";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
   



    < BrowserRouter>
    <Navbar />
    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Hire_Employee" element={< EmployeeMain/>} />
      <Route path="/Get_Remote_Job" element={< Getremote/>} />
      
     
   
      
    </Routes>
  
  </BrowserRouter>
    

  {/*  <GetHigh/> <FullTime/> <GetHire/>
<Employee/>*/}
    {/*
      <Hero />
      <Properties />
      <Details />
      <AboutAmus />
      <GridComponent />
      <CountComp />
      <Footer />*/}
    </>
  );
}

export default App;
