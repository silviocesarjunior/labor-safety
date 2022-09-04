import React from 'react';
import './works.css';
import Amazon from '../../Img/amazon.png';
import Facebook from '../../Img/facebook.png';
import Mac from '../../Img/mac.png';
import Nissan from '../../Img/nissan.png';
import Volkswagen from '../../Img/volkswagen.png';
import { Link } from 'react-scroll';

const Works = () => {
    return (
        <div className='works' id='Works'>
            {/*left side*/}
            <div className='awesome'>
                <span>Nossos trabalhos</span>
                <span>Clientes e parceiros</span>
                <spane>
                    Em Breve descrição dos treinamentos praticados.
                    <br />
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
                        <img src={Amazon} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Facebook} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Mac} alt="" />
                    </div>{" "}
                    <div className='w-secCircle'>
                        <img src={Nissan} alt="" />
                    </div>
                    <div className='w-secCircle'>
                        <img src={Volkswagen} alt="" />
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