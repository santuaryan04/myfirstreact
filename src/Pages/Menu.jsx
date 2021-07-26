import React from 'react';
import { NavLink } from 'react-router-dom';


 const Menu = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#"><img src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="30" height="24"/></NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">Link</NavLink>
        </li>
        
      </ul>
    
    </div>
  </div>
</nav>
    )
}
 export default Menu;