import React from 'react';
import {Link} from 'react-router-dom';
export const NavMenu = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark display-block position-fixed" style={{top:'0', left:'0', right:'0', padding:'10px 50px 10px 10px'}}>
  <div className="container-fluid">
    <Link className="navbar-brand display-3" href="#">Humans of ANDC</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown" >
      <ul className="navbar-nav ">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="#">About</Link>
        </li>
        <li className="nav-item">
          <Link to='/Form' className="nav-link" href="#">Form</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}
