import Home from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Navbar } from "./Components/Navbar/navbar";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Education/>
    <Experience/>
    <ContactUs/>
    </>
  );
}

export default App;
