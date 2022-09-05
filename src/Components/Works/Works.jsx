import React from 'react';
import './works.css';
import Cliente1 from '../../Img/1.png';
import Cliente2 from '../../Img/2.png';
import Cliente3 from '../../Img/3.png';
import Cliente4 from '../../Img/4.png';
import Cliente5 from '../../Img/5.png';
import Cliente6 from '../../Img/6.jpg';
import Cliente7 from '../../Img/7.png';
import Cliente8 from '../../Img/8.png';
import Cliente9 from '../../Img/9.png';
import Cliente10 from '../../Img/10.png';
import Cliente11 from '../../Img/11.png';
import Cliente12 from '../../Img/12.png';
import Cliente13 from '../../Img/13.png';
import { Link } from 'react-scroll';

const Works = () => {
    return (
        <div className='works' id='Works'>
            {/*left side*/}
            <div className='awesome'>
                <span>Venha ser nosso parceiro</span>
                <span>Clientes e parceiros</span>
                <spane>
                    Nenhum trabalho é tão importante e urgente que <br/>não possa 
                    ser planejado, e executado com <br/>
                    segurança.
                </spane>
                <br />
                <Link spy={true} to='Contact' smooth={true} activeClass='activeClass'>
                <button className='button i-button'>Contrate-me</button></Link>
                <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
            </div>

            {/*right side*/}
            <div className='w-right'>
                <div className='w-mainCircle'>
                    <div className='w-secCircle'>
                        <img src={Cliente1} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente2} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente3} alt="" />
                    </div>{" "}
                    <div className='w-secCircle'>
                        <img src={Cliente4} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente5} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente6} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente7} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente8} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente9} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente10} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente11} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente12} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Cliente13} alt="" />
                    </div>
                </div>
                {/*background circles*/}
                <div className='w-backCircle blueCircle'></div>
                <div className='w-backCircle yellowCircle'></div>
            </div>
        </div>
    )
}

export default Works