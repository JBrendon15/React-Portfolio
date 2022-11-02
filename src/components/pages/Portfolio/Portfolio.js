import React from 'react';
// import refactor from '../../assets/images/coderefactor.png';
// import explore from '../../assets/images/explore_art.png';
// import couch from '../../assets/images/couch_potato.png';
import './portfolio.css'
import * as Icon from 'react-bootstrap-icons';


const styles = {
    card: {
        maxWidth: '100%',
        height: '20%',
    },
}

function Portfolio() {
    return (
        <div className='vh-100 container row'>
            <h1 className='col-12 d-flex justify-content-center'>Portfolio</h1>
            <div className="card bg-dark text-white col-5" style={styles.card} id='refactor'>
                <h5 className="card-title vh-100 d-flex justify-content-center"> <a href='https://jbrendon15.github.io/Code-Refactor-Challenge-1/' target={'_blank'} className='navbar-brand text-decoration-none'>Code Refactor</a><a href='https://github.com/JBrendon15/Code-Refactor-Challenge-1' target={'_blank'} className='navbar-brand text-decoration-none'><Icon.Github /></a></h5>
            </div>
            <div className="card bg-dark text-white col-5" style={styles.card} id='exploreArt'>
                <h5 className="card-title d-flex justify-content-center"><a href='https://marianellag1.github.io/Explore-Art-Chicago/' target={'_blank'} className='navbar-brand text-decoration-none'>Explore Art Chicago</a><a href='https://github.com/Marianellag1/Explore-Art-Chicago' target={'_blank'} className='navbar-brand text-decoration-none'><Icon.Github /></a></h5>
            </div>
            <div className="card bg-dark text-white col-5" style={styles.card} id='potato'>
                <h5 className="card-title d-flex justify-content-center"><a href='https://infinite-river-93616.herokuapp.com/' target={'_blank'} className='navbar-brand text-decoration-none'>Couch Potato</a><a href='https://github.com/mbronstein1/Couch-Potato' target={'_blank'} className='navbar-brand text-decoration-none'><Icon.Github /></a></h5>
            </div>
            <div className="card bg-dark text-white col-5" style={styles.card} id='potato'>
                <h5 className="card-title d-flex justify-content-center"><a href='https://infinite-river-93616.herokuapp.com/' target={'_blank'} className='navbar-brand text-decoration-none'>Couch Potato</a><a href='https://github.com/mbronstein1/Couch-Potato' target={'_blank'} className='navbar-brand text-decoration-none'><Icon.Github /></a></h5>
            </div>
            <div className="card bg-dark text-white col-5" style={styles.card} id='potato'>
                <h5 className="card-title d-flex justify-content-center"><a href='https://infinite-river-93616.herokuapp.com/' target={'_blank'} className='navbar-brand text-decoration-none'>Couch Potato</a><a href='https://github.com/mbronstein1/Couch-Potato' target={'_blank'} className='navbar-brand text-decoration-none'><Icon.Github /></a></h5>
            </div>
            <div className="card bg-dark text-white col-5" style={styles.card} id='potato'>
                <h5 className="card-title d-flex justify-content-center"><a href='https://infinite-river-93616.herokuapp.com/' target={'_blank'} className='navbar-brand text-decoration-none'>Couch Potato</a><a href='https://github.com/mbronstein1/Couch-Potato' target={'_blank'} className='navbar-brand text-decoration-none'><Icon.Github /></a></h5>
            </div>
        </div>
    )
}

export default Portfolio;
