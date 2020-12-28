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
import About from './components/About/About/About';
import Overview from './components/About/Overview/Overview';
import MissionVision from './components/About/MissionVision/MissionVision';
import CoreValue from './components/About/CoreValue/CoreValue';

function App() {
  return (
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
          <Route path="/contactUs">
            <ContactUs/>
          </Route> 
        </Switch>
      </div>
        
      <Footer/>
    </Router>
    
  );
}

export default App;
