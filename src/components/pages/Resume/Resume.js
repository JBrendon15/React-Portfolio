import React from 'react';

export default function Resume() {
    return (
        <div className='vh-100 text-white container'>
            <h1 className=' d-flex justify-content-center'>Resume</h1>
            <div className='container-fluid col-6'>
            <h3>Front-end Proficiencies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h3>Back-end Proficiencies</h3>
            <ul>
                <li>API</li>
                <li>NodeJS</li>
                <li>Express</li>
                <li>MySQL/Sequelize</li>
                <li>MongoDB/Mongoose</li>
                <li>GraphQL</li>
            </ul>
            </div>
        </div>
    )
}