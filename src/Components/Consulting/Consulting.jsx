import React from 'react';
import "./consulting.css";
import Card from '../Card/Card';
import safety from '../../Img/safety.png';
import fire from '../../Img/fire.png';
import labor from '../../Img/labor.png';
import sprinter from '../../Img/sprinter.png';

const Consulting = () => {
  return (
    <div className='services' id='Services'>
        {/*left side*/}
        <div className='awesome'>
            <span>Treinamentos</span>
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
                    heading={'CIPA'}
                    detail={'Processo eleitoral, formação, certificação e reuniões ordinárias'}
                />
            </div>
            {/*2 card*/}
            <div style={{ top: '17rem', left: '6rem' }}>
                <Card
                    emoji={labor}
                    heading={'Controle de acidentes'}
                    detail={'Controle estatístico e doenças ocupacionais'}
                />
            </div>
            {/*3 card*/}
            <div style={{ top: '17rem', left: '21rem' }}>
            <Card
                    emoji={labor}
                    heading={'Avaliação'}
                    detail={'Avaliação de vibração ocupacional (corpo inteiro, mão e braços)'}
                />
            </div>
            {/*4 card*/}
            <div style={{left: '21rem' }}>
            <Card
                    emoji={sprinter}
                    heading={'APR'}
                    detail={'Análise Preliminar de Riscos'}
                />
            </div>
            {/*5 card*/}
            <div style={{ top: '17rem', left: '-24rem' }}>
                <Card
                    emoji={safety}
                    heading={'LTCAT'}
                    detail={'Laudo Técnico das Condições Ambientais de Trabalho'}
                />
            </div>
            {/*6 card*/}
            <div style={{ top: '17rem', left: '-9rem' }}>
                <Card
                    emoji={fire}
                    heading={'PPRA'}
                    detail={'Programa de Prevenção de Risco Ambientais'}
                />
            </div>
            {/*7 card*/}
            <div style={{ top: '17rem', left: '36rem' }}>
            <Card
                    emoji={sprinter}
                    heading={'PGR '}
                    detail={'Programa de Gerenciamento de Riscos'}
                />
            </div>
             {/*8 card*/}
             <div style={{left: '36rem' }}>
            <Card
                    emoji={sprinter}
                    heading={'Perícia'}
                    detail={'Assistente técnico em perícia trabalhista'}
                />
            </div>
            <div className='blur s-blur2' style={{background: 'var(--purple)'}}></div>
        </div>
    </div>
)
}

export default Consulting