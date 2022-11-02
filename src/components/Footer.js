import React from 'react';
import * as Icon from 'react-bootstrap-icons';

const styles = {
    icon: {
        fontSize: 40
    },
    footer: {
        width: '100%'
    }
}

function Footer() {
    return(
        <footer className='bg-dark d-flex justify-content-around' style={styles.footer}>
            <a style={styles.icon} className='navbar-brand text-decoration-none text-white' href='https://github.com/JBrendon15' target={'_blank'}><Icon.Github /></a>
            <a style={styles.icon} className='navbar-brand text-decoration-none text-white' href='https://www.linkedin.com/in/brendon-jiang-109817246/' target={'_blank'}><Icon.Linkedin /></a>
        </footer>
    )
}

export default Footer;