import React from 'react';
import './footer.css';
import Wave from '../../Img/wave.png';
import Insta from '@iconscout/react-unicons/icons/uil-instagram';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';

const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className='f-content'>
            <span>silviocesar.computacao@gmail.com</span>
            <div className='f-icons'>
                <Insta color='white' size='3rem'/>
                <Facebook color='white' size='3rem'/>
                <Linkedin color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer