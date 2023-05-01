import {NavLink} from 'react-router-dom'
import './NavMain.css'
import Searchbar from './Searchbar'

export default function NavMain() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-main fw-bold">
  <div className="container-fluid">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-around" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/proizvodi">Svi proizvodi</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" aria-current="page" to="/misevi">Miševi</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/podloge">Podloge za miša</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/tastature">Tastature</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/slusalice">Slušalice</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/kontakt">Kontakt</NavLink>
        </li>
      </ul>
      <Searchbar />
    </div>
  </div>
</nav>
  )
}
