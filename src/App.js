import './App.scss';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';
import TopNavbar from './components/Shared/TopNavbar/TopNavbar';
import Navbar from './components/Shared/Navbar/Navbar';
import Footer from './components/Shared/Footer/Footer';
import Overview from './components/About/Overview/Overview';
import MissionVision from './components/About/MissionVision/MissionVision';
import CoreValue from './components/About/CoreValue/CoreValue';
import Services from './components/Services/Services/Services';
import TermsOfUse from './components/TermsOfUse/TermsOfUse';
import Admin from './components/Admin/Admin';

function App() {
  return (
    <div className="" style={{width:"100%"}}>
<Router>
      <TopNavbar/>
      <Navbar/>
      <div className="app">
      <Switch>
          <Route exact path="/"> 
            <Home/>
        </Route>
        
        <Route path="/overview"> 
            <Overview/>
        </Route>
        <Route path="/missionVision"> 
            <MissionVision/>
        </Route>
        <Route path="/core-value"> 
            <CoreValue/>
        </Route>
        <Route path="/softwareDevelopment">
          <Services />
        </Route>
        <Route path="/managementConsulting">
          <Services />
        </Route>
        <Route path="/technologyConsulting">
          <Services />
        </Route>
        <Route path="/staffAugmentation">
          <Services />
        </Route>
        <Route path="/businessProcess">
          <Services />
        </Route>
        <Route path="/BpoKpo">
          <Services />
        </Route>
        <Route path="/whyAnswarIT">
          <Services />
        </Route>
          <Route path="/contactUs">
            <ContactUs/>
          </Route>
          <Route path="/admin">
            <Admin/>
          </Route>
          <Route path="/terms-of-use">
            <TermsOfUse/>
          </Route>
        </Switch>
      </div>
        
      <Footer/>
    </Router>
    </div>

    
  );
}

export default App;
