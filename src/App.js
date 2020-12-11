import './App.css';
import Home from './components/Home/Home';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import ContactUs from './components/ContactUs/ContactUs';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Home/>
       </Route>
        <Route path="/contactUs">
          <ContactUs/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
