import { createContext, useState } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.scss";
import CoreValue from "./components/About/CoreValue/CoreValue";
import MissionVision from "./components/About/MissionVision/MissionVision";
import Overview from "./components/About/Overview/Overview";
import Admin from "./components/Admin/Admin";
import Login from "./components/Authentication/Login/Login";
import CommingSoon from "./components/CommingSoon/CommingSoon";
import ContactUs from "./components/ContactUs/ContactUs";
import Home from "./components/Home/Home";
import BpoKpo from "./components/Services/BpoKpo/BpoKpo";
import BusinessProcessAssurance from "./components/Services/BusinessProcessAssurance/BusinessProcessAssurance";
import ManagementConsulting from "./components/Services/ManagementConsulting/ManagementConsulting";
import SoftwareDevelopment from "./components/Services/SoftwareDevelopment/SoftwareDevelopment";
import StaffAugmentation from "./components/Services/StaffAugmentation/StaffAugmentation";
import TechnologyConsulting from "./components/Services/TechnologyConsulting/TechnologyConsulting";
import WhyAnswarIT from "./components/Services/WhyAnswarIT/WhyAnswarIT";
import Footer from "./components/Shared/Footer/Footer";
import Navbar from "./components/Shared/Navbar/Navbar";
import TopNavbar from "./components/Shared/TopNavbar/TopNavbar";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import Blockchain from "./components/TrainingCourse/Blockchain";
import Course from "./components/TrainingCourse/Course";
import DigitalMarketing from "./components/TrainingCourse/DigitalMarketing";
import TrainingCourse from "./components/TrainingCourse/TrainingCourse";
import TrainingTerms from "./components/TrainingTerms/TrainingTerms";
import ScrollToTop from "./ScrollToTop";

export const UserContext = createContext();
function App() {
  const userInfo = sessionStorage.getItem('loggedInUser')
  
  const [loggedInUser, setLoggedInUser] = useState(userInfo?.name !== 'logout' ? JSON.parse(userInfo): '');
  
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <div className="" style={{ width: "100%" }}>
        <Router>
          <ScrollToTop>
          <TopNavbar />
          <Navbar />
          <div className="app">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>

                <Route path="/overview">
                  <Overview />
                </Route>
                <Route path="/missionVision">
                  <MissionVision />
                </Route>
                <Route path="/core-value">
                  <CoreValue />
                </Route>
                <Route path="/course">
                  {/* <Course /> */}
                  <TrainingCourse />
                </Route>

                <Route path="/softwareCourse">
                  <Course />
                </Route>

                <Route path="/managementConsulting">
                  <ManagementConsulting />
                </Route>
                <Route path="/technologyConsulting">
                  <TechnologyConsulting />
                </Route>
                <Route path="/staffAugmentation">
                  <StaffAugmentation />
                </Route>
                <Route path="/businessProcess">
                  <BusinessProcessAssurance />
                </Route>
                <Route path="/BpoKpo">
                  <BpoKpo />
                </Route>
                <Route path="/whyAnswarIT">
                  <WhyAnswarIT />
                </Route>
                <Route path="/contactUs">
                  <ContactUs />
                </Route>
                <Route path="/admin">
                  <Admin />
                </Route>

                <Route path="/softwareDevelopment">
                  <SoftwareDevelopment />
                </Route>

                <Route exact path="/blockchainCourse">
                  <Blockchain title="Blockchain is" />
                </Route>

                <Route exact path="/digitalMarketing">
                  <DigitalMarketing title="Digital Marketing is" />
                </Route>

                {/* <Route exact path="/training">
              <CommingSoon title="Software Development Course is"/>
            </Route> */}

                <Route exact path="/career">
                  <CommingSoon title="Our company will appointed 100 expert software engineer and block chain developer" />
                </Route>

                <Route path="/terms-of-use">
                  <TermsOfUse />
                </Route>

                <Route path="/training-terms-and-condition">
                  <TrainingTerms />
                </Route>

                <Route path="/login">
                  <Login />
                </Route>
              </Switch>
          </div>
          <MessengerCustomerChat
            pageId="100961108288258"
            appId="155546436606054"
            // htmlRef="fb-customer-chat"
            />
          <Footer />
          </ScrollToTop>
        </Router>
      </div>
    </UserContext.Provider>
  );
}

export default App;
