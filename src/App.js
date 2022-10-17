import { BrowserRouter, NavLink, Redirect, Route, Switch } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <span className="nav-link">Hangszerek</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Új hangszer</span>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
}

export default App;
