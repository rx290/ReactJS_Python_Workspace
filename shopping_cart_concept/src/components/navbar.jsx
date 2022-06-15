import React, { Component } from 'react';

const NavBar = (props) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-bran" href="#">
                Navbar{""}
                <span className="badge badge-pill badge-secondary">
                    {props.totalCounters}
                </span>
            </a>
        </nav>
                );
            }
export default NavBar;