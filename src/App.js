import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Home from "./Components/Home/Home";
import { About } from "./Components/About/About";
import { Navbar } from "./Components/Navbar/navbar";
import { ContactUs } from "./Components/ContactUs/ContactUs";
import { Education } from "./Components/Education/Education";
import { Experience } from "./Components/Experience/Experience";
import { Skills } from "./Components/Skills/Skills";
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
  {/* <Router>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={ContactUs} />
        <Route path="/education" component={Education} />
        <Route path="/experience" component={Experience} />
    </Router> */}
    </>
  );
}

export default App;
