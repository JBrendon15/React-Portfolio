import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const styles = {
    icon: {
        fontSize: 40
    }
}

function Footer() {
    return(
        <footer className='bg-dark d-flex justify-content-center col-lg-12'>
            <a style={styles.icon} className='navbar-brand text-decoration-none text-white' href='#test'><Icon.Github /></a>
            <a style={styles.icon} className='navbar-brand text-decoration-none text-white' href='#test2'><Icon.Linkedin /></a>
        </footer>
    )
}

export default Footer;