import React from 'react';
import * as Icon from 'react-bootstrap-icons';
import '../index.css'

const styles = {
    icon: {
        fontSize: 40
    },
}

function Footer() {
    return(
        <footer className='d-flex justify-content-around'>
            <a style={styles.icon} className='navbar-brand text-decoration-none text-white' href='https://github.com/JBrendon15' target={'_blank'}><Icon.Github /></a>
            <a style={styles.icon} className='navbar-brand text-decoration-none text-white' href='https://www.linkedin.com/in/brendon-jiang-109817246/' target={'_blank'}><Icon.Linkedin /></a>
        </footer>
    )
}

export default Footer;