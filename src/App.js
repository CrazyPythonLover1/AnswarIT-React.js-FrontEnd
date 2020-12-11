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

function App() {
  return (
    <div className="app">
<Router>
      <TopNavbar/>
      <Navbar/>
      <Switch>
        <Route exact path="/"> 
          <Home/>
       </Route>
        <Route path="/contactUs">
          <ContactUs/>
        </Route>
      </Switch>
      <Footer/>
    </Router>
    </div>
    
  );
}

export default App;
