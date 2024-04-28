import "./Navbar.css";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import TerrainOutlinedIcon from '@mui/icons-material/TerrainOutlined';
import PermMediaOutlinedIcon from '@mui/icons-material/PermMediaOutlined';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav>
            <Link to="/" className="title">
                <PermMediaOutlinedIcon fontSize="large" />
                Visit Ilocos Sur
            </Link>
            <div className="menu"
                onClick={() => {
                    setMenuOpen(!menuOpen);
                }}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            <ul className={menuOpen ? "open" : ""}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/destinations">Destinations</Link>
                </li>
                <li>
                    <Link to="/foods">Foods</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
