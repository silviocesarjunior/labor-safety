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
        <div className='intro' id='Home'>
            <div className='i-left'>
                <div className='i-name'>
                    <span>N&R consultoria</span>
                    <span>& treinamentos</span>
                    <span>Somos uma de empresa de consultoria e treinamentos.
                        Sempre pautado na ética, compromisso e respeito ao cliente, buscando <br />
                        sempre em atender na íntegra as exigências legais vigentes.
                    </span>
                </div>
                <div className='i-icons'>
                    <a href='https://www.linkedin.com/in/nilson-ribeiro-728b09a9/'>
                        <img src={Linkedin} alt="" /></a>
                </div>
            </div>
            <div className='i-right'>
                <img src={Vector1} alt="" />
                <img src={Vector2} alt="" />
                <img src={boy} alt="" />
                <div style={{ top: '-4%', left: '68%' }} className='floating-div'>
                    <FloatingDiv image={floating} txt1='Primeiros' txt2='socorros' />
                </div>
                {/*blur divs */}
                <div className='blur' style={{ background: "rgb(236 210 255" }}></div>
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
