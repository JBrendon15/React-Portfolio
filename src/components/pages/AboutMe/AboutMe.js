import React from 'react';
import profile from '../../../assets/images/profile.png'

const styles = {
    img: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    }
}
export default function AboutMe() {
    return (
        <div className='vh-100 text-white container'>
            <h1 className='d-flex justify-content-center'>About Me</h1>
            <img src={profile} alt="profile_picture" style={styles.img} />
            <div className='container-fluid col-6'>
                <p>
                    My name is Brendon and I am aiming to become a Full-Stack Developer. I am currently in the Northwestern Coding Bootcamp. After I finish the bootcamp, I want to acquire more knowledge on coding and find a career that I will enjoy in the tech industry.  
                </p>
            </div>
        </div>
    )
}