import { lazy , Suspense } from "react";
import { Home }from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Navbar } from "./Components/Navbar/navbar";
import { ContactUs } from "./Components/ContactUs/ContactUs";
// import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
import { Skills } from "./Components/Skills/Skills";
const Education = lazy(() => import("./Components/Education/Education"));
function App() {
  return (
  <>
    <Navbar/>
    <Home/>
    <About/>
    <Suspense fallback={<span>Loading....</span>}>
    <Education/>
    </Suspense>
    <Experience/>
    <Skills/>
    <ContactUs/>
    </>
  );
}

export default App;
