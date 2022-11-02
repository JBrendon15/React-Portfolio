import React from 'react';
import refactor from '../../assets/images/coderefactor.png';
import couch from '../../assets/images/couch_potato.png';
import explore from '../../assets/images/explore_art.png';


const styles = {
    card: {
        maxWidth: '30%',
        height:'30%',
        objectFit: 'stretch'
    }
}

function Portfolio() {
    return (
        <div className='vh-100 container row d-flex justify-content-between'>
            <h1>Portfolio</h1>
            <div className="card bg-dark text-white row mb-5 row" style={styles.card}>
                <img src={refactor} className="img-fluid w-100 h-auto m-0 p-0" alt="Code_Refactor" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Code Refactor</h5>
                    </div>
            </div>
            <div className="card bg-dark text-white row col-lg-6" style={styles.card}>
                <img src={explore} className="card-img" alt="Explore Art Chicago" />
                    <div className="card-img-overlay d-flex justify-content-center">
                        <h5 className="card-title">Explore Art Chicago</h5>
                    </div>
            </div>
            <div className="card bg-dark text-white row" style={styles.card}>
                <img src={couch} className="card-img" alt="Couch Potato" />
                    <div className="card-img-overlay">
                        <h5 className="card-title">Couch Potato</h5>
                    </div>
            </div>
        </div>
    )
}

export default Portfolio;
