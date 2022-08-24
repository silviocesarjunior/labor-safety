import React from 'react';
import './intro.css';
import Linkedin from '../../Img/linkedin.png';
import Vector1 from '../../Img/Vector1.png';
import Vector2 from '../../Img/Vector2.png';
import boy from '../../Img/boy.png';
import floating from '../../Img/floating.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

const Intro = () => {
    return (
        <div className='intro'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>Bem vindo ao</span>
                    <span>X treinamentos</span>
                    <span>Treinamentos de segurança do trabalho, combate a incêndio e primeiros socorros</span>
                </div>
                <button className='button i-button'>Entre em contato</button>
                <div className='i-icons'>
                    <a href='#'>
                        <img src={Linkedin} alt="" /></a>
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <div style={{top: '-4%', left: '68%'}}>
                    <FloatingDiv image={floating} txt1='Primeiros' txt2='socorros' />
                </div>
                {/*blur divs */}
                <div className='blur' style={{background: "rgb(236 210 255"}}></div>
                <div className='blur' style={{
                    background: '#C1F5FF',
                    top: '17rem',
                    width: '21rem',
                    height: '11rem',
                    left: '-9rem'
                }}>
                </div>
            </div>
        </div>
    )
}

export default Intro;
