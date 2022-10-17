import { BrowserRouter, NavLink, Routes, Route } from "react-router-dom";
import './App.css';
import { InstrumentCreatePage } from "./InstrumentCreatePage";
import { InstrumentListPage } from "./InstrumentListPage";
import { InstrumentSinglePage } from "./InstrumentSinglePage";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} end>
                <span className="nav-link">Instruments</span>
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'/new-instrument'} activeClassName="active">
                <span className="nav-link">New instrument</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<InstrumentListPage />}></Route>
        <Route path="/instrument/:instrumentId" element={<InstrumentSinglePage />}></Route>
        <Route path="/new-instrument" element={<InstrumentCreatePage />}></Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
