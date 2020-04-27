import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.png'

export default class Navbar extends React.Component {
    render(){
    return (
        <nav className="navbar fixed-top navbar-expand-lg bg-white border border-dark">
            <img className="navbar-brand" alt="solve staking logo" src={logo}
                style={{
                    height: "50px",
                    width: "25px"
                }} />
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Home
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/">Intro</NavLink>
                            <NavLink className="dropdown-item" to="/">Staking Service</NavLink>
                            {/* <a className="dropdown-item" href="#">Something else here</a> */}
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Learn
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <NavLink className="dropdown-item" to="/learn">Crypto</NavLink>
                            <a className="dropdown-item" href="#cardano">Cardano</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown link
        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                            <a className="dropdown-item" href="#">Action</a>
                            <a className="dropdown-item" href="#">Another action</a>
                            <a className="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>
                    <li>
                        <label class="switch">
                            <input type="checkbox" id="switch" name="theme" />
                            <span class="slider round"></span>
                        </label>
                    </li>
                </ul>
            </div>
            <script></script>
        </nav>
    )
}
}