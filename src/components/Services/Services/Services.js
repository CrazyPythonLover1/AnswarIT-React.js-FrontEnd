import React from 'react';
import { NavLink, Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import SoftwareDevelopment from '../SoftwareDevelopment/SoftwareDevelopment';

const routes = [
    {
      path: "/SoftwareDevelopment",
      exact: true,
      sidebar: () => <div>home!</div>,
      main: () => <SoftwareDevelopment />
    },
    {
      path: "/bubblegum",
      sidebar: () => <div>bubblegum!</div>,
      main: () => <SoftwareDevelopment />
    },
    {
      path: "/shoelaces",
      sidebar: () => <div>shoelaces!</div>,
      main: () => <h2>Shoelaces</h2>
    }
  ];
const Services = () => {
    return (
        <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <NavLink to="/SoftwareDevelopment">Home</NavLink>
            </li>
            <li>
              <NavLink to="/bubblegum">Bubblegum</NavLink>
            </li>
            <li>
              <NavLink to="/shoelaces">Shoelaces</NavLink>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
    );
};

export default Services;