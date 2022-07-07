import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from "./components/home/Home";
import Fish from "./components/fish/Fish";
import {createTheme, ThemeProvider} from "@mui/material";

let theme = createTheme({
  palette: {
    primary: {
      main: '#006E9C',
      light: '#EFFAFF',
    }
  },
  typography: {
    fontFamily: 'Montserrat',
    h1: {
      fontSize: '2.125rem',
      fontWeight: 600,
      color: '#006E9C',
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
      color: '#006E9C',
    },
    h3: {
      fontSize: '1.25rem',
      fontWeight: 500,
      color: '#006E9C',
    },
    h4: {
      fontSize: '1rem',
      fontWeight: 500,
      color: '#006E9C',
    },
    h5: {
      fontSize: '0.875rem',
      fontWeight: 'normal',
      color: '#006E9C',
    },
    h6: {
      fontSize: '0.75rem',
      fontWeight: 'bold',
      color: '#006E9C',
    },
    body1: {
      fontSize: '0.75rem',
      fontWeight: 'normal',
    },
    caption: {
      color: '#757575',
    }
  }
});

function App() {
  // A list of our routes makes things a little clearer and
  const routes = [
    {
      path: '/fish/:id',
      component: <Fish />
    },
    {
      path: '*',
      component: <Home />
    }
  ];

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
