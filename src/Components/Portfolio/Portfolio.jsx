import React from 'react';
import './portfolio.css';
import {Swiper, SwiperSlide} from 'swiper/react';
import Bootcamp from '../../Img/1.png';
import Bootcamp2 from '../../Img/2.png';
import Site from '../../Img/3.png';
import Site2 from '../../Img/4.png';
import Vendas from '../../Img/5.png';
import Vendas2 from '../../Img/6.png'; 
import 'swiper/css';

const Portfolio = () => {
  return (
    <div className='portfolio'>
        {/*heading*/}
        <span>Projetos recentes</span>
        <span>Imagens dos treinamentos</span>
        {/*slider*/}
        <Swiper
        spaceBetween={30}
        slidesPerView={4}
        grabCursor={true}
        className='portfolio-slider'
        >
          <SwiperSlide>
            <img src={Bootcamp} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bootcamp2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Site} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Site2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Vendas} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Vendas2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bootcamp} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Bootcamp2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Site} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Site2} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Vendas} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Vendas2} alt="" />
          </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Portfolio