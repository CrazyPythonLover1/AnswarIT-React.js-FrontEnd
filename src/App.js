import "./App.scss";
import Home from "./components/Home/Home";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ContactUs from "./components/ContactUs/ContactUs";
import TopNavbar from "./components/Shared/TopNavbar/TopNavbar";
import Navbar from "./components/Shared/Navbar/Navbar";
import Footer from "./components/Shared/Footer/Footer";
import Overview from "./components/About/Overview/Overview";
import MissionVision from "./components/About/MissionVision/MissionVision";
import CoreValue from "./components/About/CoreValue/CoreValue";
import Services from "./components/Services/Services/Services";
import TermsOfUse from "./components/TermsOfUse/TermsOfUse";
import Admin from "./components/Admin/Admin";
import SoftwareDevelopment from "./components/Services/SoftwareDevelopment/SoftwareDevelopment";
import ManagementConsulting from "./components/Services/ManagementConsulting/ManagementConsulting";
import TechnologyConsulting from "./components/Services/TechnologyConsulting/TechnologyConsulting";
import StaffAugmentation from "./components/Services/StaffAugmentation/StaffAugmentation";
import BusinessProcessAssurance from "./components/Services/BusinessProcessAssurance/BusinessProcessAssurance";
import BpoKpo from "./components/Services/BpoKpo/BpoKpo";
import WhyAnswarIT from "./components/Services/WhyAnswarIT/WhyAnswarIT";
import Course from "./components/TrainingCourse/Course";
import CommingSoon from "./components/CommingSoon/CommingSoon";
import TrainingCourse from "./components/TrainingCourse/TrainingCourse";
import Blockchain from "./components/TrainingCourse/Blockchain";
import DigitalMarketing from "./components/TrainingCourse/DigitalMarketing";

function App() {
  return (
    <div className="" style={{ width: "100%" }}>
      <Router>
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
              <CommingSoon title="Career is" />
            </Route>

            <Route path="/terms-of-use">
              <TermsOfUse />
            </Route>
          </Switch>
        </div>

        <Footer />
      </Router>
    </div>
  );
}

export default App;
