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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed neque
                    velit, lobortis ut magna varius, blandit rhoncus sem. Morbi lacinia nisi
                    ac dui fermentum, sed luctus urna tincidunt. Etiam ut feugiat ex. Cras
                    non risus mi. Curabitur mattis rutrum ipsum, ut aliquet urna imperdiet
                    ac. Sed nec nulla aliquam, bibendum odio eget, vestibulum tortor. Cras
                    rutrum ligula in tincidunt commodo. Morbi sit amet mollis orci, in
                    tristique ex. Donec nec ornare elit. Donec blandit est sed risus feugiat
                    porttitor. Vestibulum molestie hendrerit massa non consequat. Vestibulum
                    vitae lorem tortor. In elementum ultricies tempus. Interdum et malesuada
                    fames ac ante ipsum primis in faucibus.
                </p>
            </div>
        </div>
    )
}