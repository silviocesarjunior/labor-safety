import React from 'react';
import './works.css';
import Amazon from '../../Img/amazon.png';
import Facebook from '../../Img/facebook.png';
import Mac from '../../Img/mac.png';
import Nissan from '../../Img/nissan.png';
import Volkswagen from '../../Img/volkswagen.png';


const Works = () => {
    return (
        <div className='works'>
            {/*left side*/}
            <div className='awesome'>
                <span>Meus trabalhos</span>
                <span>Marcas e Clientes</span>
                <spane>
                    Em Breve descrição dos treinamentos praticados.
                    <br />
                    Treinamentos como primeiros socorros,combate a incêndio e outros.
                    <br />
                    Em Breve descrição dos trabalhos já realizados.
                </spane>
                <br />
                <button className='button i-button'>Contrate-me</button>
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