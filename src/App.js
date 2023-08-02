import { Home }from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Navbar } from "./Components/Navbar/navbar";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Experience } from "./Components/Experience/Experience";
import { Skills } from "./Components/Skills/Skills";
import { Education } from "./Components/Education/Education";
function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <About/> 
    <Education/>
    <Experience/>
    <Skills/>
    <ContactUs/>
    </>
  );
}

export default App;
