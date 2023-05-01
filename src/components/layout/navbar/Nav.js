import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-3">
    <div className="container-fluid">
        <NavLink className="navbar-brand" to="/proizvodi">Gaming Gear Network</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
    </div>
    </nav>
  )
}
