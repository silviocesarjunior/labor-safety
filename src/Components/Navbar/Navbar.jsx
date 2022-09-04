import React from 'react';
import './navbar.css';
import { Link } from 'react-scroll';

const Navbar = () => {
  return (
    <div className='n-wrapper'>
      <div className='n-left'>
        <div className='n-name'>N&R</div>
      </div>
      <div className='n-right'>
        <div className='n-list'>
          <ul style={{ listStyleType: 'none' }}>
            <Link spy={true} to='Home' smooth={true} activeClass='activeClass'>
              <li>Home</li>
            </Link>
            <Link spy={true} to='Services' smooth={true} activeClass='activeClass'>
              <li>Serviços</li>
            </Link>
            <Link spy={true} to='Experience' smooth={true} activeClass='activeClass'>
              <li>Experiência</li>
            </Link>
            <Link spy={true} to='Works' smooth={true} activeClass='activeClass'>
              <li>Clientes</li>
            </Link>
            <Link spy={true} to='Portfolio' smooth={true} activeClass='activeClass'>
              <li>Projetos</li>
            </Link>

          </ul>
        </div>
        <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
        <button className='button n-button'>
          Contate-nos
        </button>
        </Link>
      </div>
    </div>
  )
}

export default Navbar