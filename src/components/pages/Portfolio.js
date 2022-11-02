import React from 'react';
import refactor from '../../assets/images/coderefactor.png';
import couch from '../../assets/images/couch_potato.png';
import explore from '../../assets/images/explore_art.png';

export default function Portfolio() {
    return (
        <div>
            <h1>Portfolio</h1>
            <div className="card bg-dark text-white row">
                <img src={refactor} class="card-img" alt="Code_Refactor" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Code Refactor</h5>
                    </div>
            </div>
            <div className="card bg-dark text-white row">
                <img src={explore} class="card-img" alt="Explore Art Chicago" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Explore Art Chicago</h5>
                    </div>
            </div>
            <div className="card bg-dark text-white row">
                <img src={couch} class="card-img" alt="Couch Potato" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Couch Potato</h5>
                    </div>
            </div>
        </div>
    )
}
