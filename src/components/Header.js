import React from 'react';

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid row bg-dark text-white">
            <div className="container row d-flex">
                <h1 className="display-4 col-lg-4">Brendon Jiang</h1>
                <nav className="navbar navbar-expand-lg bg-dark col-lg-8 justify-content-center">
                    <a className="navbar-brand text-white text-decoration-none" href="#about-me">About Me</a>
                    <a className="navbar-brand text-white text-decoration-none" href="#portfolio">Portfolio</a>
                    <a className="navbar-brand text-white text-decoration-none" href="#contact">Contact</a>
                    <a className="navbar-brand text-white text-decoration-none" href='#resume'>Resume</a>
                </nav>
            </div>
        </div>
    )
}

export default Header;