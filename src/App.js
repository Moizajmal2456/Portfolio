

import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
import Home from "./Components/Home/Home";
import { Navbar } from "./Components/Navbar/navbar";
import { ContactUs } from "./Components/ContactUs/ContactUs";
function App() {
  return (
    <>
    <Navbar/>
    <Home/>
    <Education/>
    <Experience/>
    <ContactUs/>
    </>
  );
}

export default App;
