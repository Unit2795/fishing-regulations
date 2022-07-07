import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/Home";
import Fish from "./components/Fish";

function App() {
  const routes = [
    {
      path: '/fish/:id',
      component: <Fish />,
    },
    {
      path: '*',
      component: <Home />,
    }
  ];

  return (
    <Router>
      <Routes>
        {
          routes.map((route, index) => {
            return (
              <Route key={index} path={route.path} element={route.component} />
            );
          })
        }
      </Routes>
    </Router>
  );
}

export default App;
