import React from 'react';
import "./services.css";
import Card from '../Card/Card';
import safety from '../../Img/safety.png';

const Services = () => {
  return (
    <div className='services'>
        {/*left side*/}
        <div className='awesome'>
            <span>Meus treinamentos</span>
            <span>serviços</span>
            <spane>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                <br />
                Ipsum odio atque veritatis sit. 
            </spane>
        </div>
        {/*right side*/}
        <div className='cards'>
            <div>
                <Card
                emoji = {safety}
                heading = {'Primeiros socorros'}
                detail = {'Treinamento teórico e prático...'}
                />
            </div>
        </div>
    </div>
  )
}

export default Services