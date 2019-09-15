import React from 'react';
import './App.css';
import {HashRouter, Link} from "react-router-dom";
import routes from "./routes"



function App() {
  return (
    <HashRouter>
      <nav className="nav-bar">
        <Link to="/" ><button>Home</button></Link>
      <div className="nav-right">
          <Link to="/servers" ><button>Servers</button></Link>
          <Link><button>Kits</button></Link>
          <Link><button>Contact</button></Link>
        </div>
      </nav>
      {routes}
    </HashRouter>
  );
}

export default App;
