import React from 'react'
import {NavLink} from 'react-router-dom'
import CartWidget from './CartWidget'

const NavBar = () =>{
    return (
        <div>
            
             <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid">
    <CartWidget/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/buzos'>Buzos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/camisas'>Camisas</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
}

export default NavBar