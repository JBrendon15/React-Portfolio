import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import potato from '../../../assets/images/couch_potato.png';
import art from '../../../assets/images/explore_art.png';
import weather from '../../../assets/images/weather_dashboard.png';
import scheduler from '../../../assets/images/scheduler.png';
import notes from '../../../assets/images/notes.png';
import glimpse from '../../../assets/images/glimpse.png';


function Portfolio() {
    return (
        <div className='vh-100 container row text-white d-flex justify-content-center g-4'>
            <h1 className='col-12 d-flex justify-content-center'>Portfolio</h1>
            <div className="card col-lg-3 col-md-5 col-sm-12 text-dark m-2">
                <img src={potato} className="card-img-top" alt="couch_potato" />
                <div className="card-body">
                    <h4 className="card-title">Couch Potato</h4>
                    <h6 className="card-text">Node/Express/MySQL</h6>
                    <p className="card-text">Sign Up and Save Movies to your Favorites!</p>
                </div>
                <div className="card-body">
                    <a href="https://infinite-river-93616.herokuapp.com/" target={'_blank'} className="card-link navbar-brand text-decoration-none">Couch Potato</a>
                    <a href="https://github.com/JBrendon15/Couch-Potato" target={'_blank'} className="card-link navbar-brand text-decoration-none"><Icon.Github /></a>
                </div>
            </div>
            <div className="card col-lg-3 col-md-5 col-sm-12 text-dark m-2">
                <img src={art} className="card-img-top" alt="explore_art" />
                <div className="card-body">
                    <h4 className="card-title">Explore Art Chicago</h4>
                    <h6 className="card-text">HTML/JavaScript/CSS</h6>
                    <p className="card-text">Explore the Artworks at the Art Institute of Chicago!</p>
                </div>
                <div className="card-body">
                    <a href="https://marianellag1.github.io/Explore-Art-Chicago/" target={'_blank'} className="card-link navbar-brand text-decoration-none">Explore Art Chicago</a>
                    <a href="https://github.com/Marianellag1/Explore-Art-Chicago" target={'_blank'} className="card-link navbar-brand text-decoration-none"><Icon.Github /></a>
                </div>
            </div>
            <div className="card col-lg-3 col-md-5 col-sm-12 text-dark m-2">
                <img src={glimpse} className="card-img-top" alt="coding_quiz" />
                <div className="card-body">
                    <h4 className="card-title">Glimpse</h4>
                    <h6 className="card-text">React/Bootstrap/Apollo/GraphQL/MongoDB/Websocket</h6>
                    <p className="card-text">Easy to use chat application. Signup and start chatting!</p>
                </div>
                <div className="card-body">
                    <a href="https://glimpse-chat.herokuapp.com/" target={'_blank'} className="card-link navbar-brand text-decoration-none">Glimpse</a>
                    <a href="https://github.com/Shengaero/glimpse" target={'_blank'} className="card-link navbar-brand text-decoration-none"><Icon.Github /></a>
                </div>
            </div>
            <div className="card col-lg-3 col-md-5 col-sm-12 text-dark m-2">
                <img src={weather} className="card-img-top" alt="weather_dashboard" />
                <div className="card-body">
                    <h4 className="card-title">Weather Dashboard</h4>
                    <h6 className="card-text">APIs/JavaScript</h6>
                    <p className="card-text">Check the 5-Day Forecase of your Location!</p>
                </div>
                <div className="card-body">
                    <a href="https://jbrendon15.github.io/Weather-Dashboard/" target={'_blank'} className="card-link navbar-brand text-decoration-none">Weather Dashboard</a>
                    <a href="https://github.com/JBrendon15/Weather-Dashboard" target={'_blank'} className="card-link navbar-brand text-decoration-none"><Icon.Github /></a>
                </div>
            </div>
            <div className="card col-lg-3 col-md-5 col-sm-12 text-dark m-2">
                <img src={scheduler} className="card-img-top" alt="work_day_scheduler" />
                <div className="card-body">
                    <h4 className="card-title">Work Day Scheduler</h4>
                    <h6 className="card-text">Third-Party APIs</h6>
                    <p className="card-text">Daily Schedule Tracker</p>
                </div>
                <div className="card-body">
                    <a href="https://jbrendon15.github.io/Work-Day-Scheduler/" target={'_blank'} className="card-link navbar-brand text-decoration-none">Work Day Scheduler</a>
                    <a href="https://github.com/JBrendon15/Work-Day-Scheduler" target={'_blank'} className="card-link navbar-brand text-decoration-none"><Icon.Github /></a>
                </div>
            </div>
            <div className="card col-lg-3 col-md-5 col-sm-12 text-dark m-2">
                <img src={notes} className="card-img-top" alt="note_taker" />
                <div className="card-body">
                    <h4 className="card-title">Note Taker</h4>
                    <h6 className="card-text">Express/CRUD/DB</h6>
                    <p className="card-text">Note Taking App that will Save</p>
                </div>
                <div className="card-body">
                    <a href="https://powerful-crag-77355.herokuapp.com/" target={'_blank'} className="card-link navbar-brand text-decoration-none">Note Taker</a>
                    <a href="https://github.com/JBrendon15/Note-Taker" target={'_blank'} className="card-link navbar-brand text-decoration-none"><Icon.Github /></a>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;
