import React from 'react';
import "./services.css";
import Card from '../Card/Card';
import safety from '../../Img/safety.png';
import fire from '../../Img/fire.png';
import labor from '../../Img/labor.png';
import sprinter from '../../Img/sprinter.png';

const Services = () => {
    return (
        <div className='services'>
            {/*left side*/}
            <div className='awesome'>
                <span>Meus treinamentos</span>
                <span>serviços</span>
                <spane>
                    Breve descrição dos treinamentos praticados.
                    <br />
                    Treinamentos como primeiros socorros,combate a incêndio e outros.
                </spane>
            </div>
            {/*right side*/}
            <div className='cards'>
                <div style={{ left: '11rem' }}>
                    <Card
                        emoji={safety}
                        heading={'Primeiros socorros'}
                        detail={'Treinamento teórico e prático...'}
                    />
                </div>
                {/*second card*/}
                <div style={{ top: '12rem', left: '-4rem' }}>
                    <Card
                        emoji={fire}
                        heading={'Combate a incêndio'}
                        detail={'Treinamento teórico e prático...'}
                    />
                </div>
                {/*3rd card*/}
                <div style={{ top: '17rem', left: '11rem' }}>
                <Card
                        emoji={labor}
                        heading={'Segurança na fábrica'}
                        detail={'Treinamento teórico e prático...'}
                    />
                </div>
                {/*4rd card*/}
                <div style={{ top: '10rem', left: '26rem' }}>
                <Card
                        emoji={sprinter}
                        heading={'Sistemas de combate'}
                        detail={'Treinamento teórico e prático...'}
                    />
                </div>
                <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Services