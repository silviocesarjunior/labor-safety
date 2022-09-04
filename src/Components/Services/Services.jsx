import React from 'react';
import "./services.css";
import Card from '../Card/Card';
import safety from '../../Img/safety.png';
import fire from '../../Img/fire.png';
import labor from '../../Img/labor.png';
import sprinter from '../../Img/sprinter.png';

const Services = () => {
    return (
        <div className='services' id='Services'>
            {/*left side*/}
            <div className='awesome'>
                <span>Treinamentos aplicados</span>
                <span>Serviços</span>
                <span>
                    Obs. Para os treinamentos NR 10 Básico e SEP,<br />e recolhido a ART dos treinamentos.
                </span>
            </div>
            {/*right side*/}
            <div className='cards'>
                {/*1 card*/}
                <div style={{ left: '6rem' }}>
                    <Card
                        emoji={safety}
                        heading={'NR01'}
                        detail={'Elaboração e Treinamentos de Ordens de Serviços em Segurança e Saúde no Trabalho'}
                    />
                </div>
                {/*2 card*/}
                <div style={{ top: '17rem', left: '6rem' }}>
                    <Card
                        emoji={fire}
                        heading={'NR05 - CIPA'}
                        detail={'Comissão Interna de Prevenção de Acidentes'}
                    />
                </div>
                {/*3 card*/}
                <div style={{ top: '17rem', left: '21rem' }}>
                <Card
                        emoji={labor}
                        heading={'NR06'}
                        detail={'Equipamento de Proteção Individual'}
                    />
                </div>
                {/*4 card*/}
                <div style={{left: '21rem' }}>
                <Card
                        emoji={sprinter}
                        heading={'NR07'}
                        detail={'Primeiros socorros/desfibrilador externo automático DEA'}
                    />
                </div>
                {/*5 card*/}
                <div style={{ top: '17rem', left: '-24rem' }}>
                    <Card
                        emoji={safety}
                        heading={'NR10'}
                        detail={'Segurança em instalações e serviços em eletricidade'}
                    />
                </div>
                {/*6 card*/}
                <div style={{ top: '17rem', left: '-9rem' }}>
                    <Card
                        emoji={fire}
                        heading={'NR10 - SEP'}
                        detail={'Sistema Elétrico de Potência'}
                    />
                </div>
                {/*7 card*/}
                <div style={{ top: '17rem', left: '36rem' }}>
                <Card
                        emoji={sprinter}
                        heading={'NR11'}
                        detail={'Talha e Ponte Rolante'}
                    />
                </div>
                 {/*8 card*/}
                 <div style={{left: '36rem' }}>
                <Card
                        emoji={sprinter}
                        heading={'NR11'}
                        detail={'Operador de Empilhadeira'}
                    />
                </div>
                <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
            </div>
        </div>
    )
}

export default Services