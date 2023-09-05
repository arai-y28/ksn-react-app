import React from "react";
import { Route, Routes } from "react-router-dom";
import  Login  from "./pages/login";
import  Main  from "./pages/mainpage";
import  Uri  from "./pages/uri";
import  NotFound  from "./pages/NotFound";
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';

const App: React.FC = () => {
  return (
    <div className="App">
      <Breadcrumbs aria-label="breadcrumb">
        <Link 
          underline="hover" 
          color="inherit" 
          href="/"
        >
          ROOT
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/login"
        >
          LOGIN
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/main"
        >
          Main
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/uri"
        >
          Uri
        </Link>
        <Typography color="text.primary">
          Breadcrumbs
        </Typography>
      </Breadcrumbs>
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/main" element={ <Main/> } />
        <Route path="/uri" element={ <Uri/> } />
        <Route path="*" element={ <NotFound/> } />
      </Routes>

      {/* レスポンシブアプリバー */}
      {/*<ResponsiveAppBar/>*/}
    </div>
  );
};

export default App;