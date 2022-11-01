import React from 'react';

function Header() {
    return (
        <div className="jumbotron jumbotron-fluid bg-primary d-flex justify-content-around">
            <div className="container row d-flex justify-content-around">
                <h1 className="display-4 col-lg-4">Brendon Jiang</h1>
                <nav className="navbar navbar-expand-lg bg-light col-lg-8">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#">About Me</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Contact</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href='#'>Resume</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Header;