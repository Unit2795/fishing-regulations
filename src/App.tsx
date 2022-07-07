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
    },
    secondary: {
      main: '#4FA150',
      light: '#EDF5ED',
    },
    warning: {
      main: '#F28F1E',
      light: '#FFF4CC',
    },
    error: {
      dark: '#FF3A41',
      main: '#ff666b',
      light: '#ffccce',
    },
    grey: {
      700: '#616161',
    },
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
      // color: theme.palette.grey[700]
    },
    caption: {
      color: '#757575',
    },
  },
  components: {
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: '15px',
          '&.Mui-selected': {
            background: '#EFFAFF',
          },
        },
      },
    },
  },
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
