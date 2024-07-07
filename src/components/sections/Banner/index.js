
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import styled from "styled-components";


const BannerContainer = styled.section`

    .item-slide{
        width:100%;
    }
`

const Banner = ()=> {
    return(
        <BannerContainer>
            <Swiper 
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                effect={'fade'}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectFade, Autoplay, Pagination, Navigation]}
                className="mySwiper"

            >   
                <SwiperSlide>
                    <img className="item-slide" src="https://github.com/rlxmts.png"  alt="matheus"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="item-slide" src="./img/slide1.jpeg"  alt="matheus"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="item-slide" src="https://github.com/rlxmts.png"  alt="matheus"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="item-slide" src="https://github.com/rlxmts.png"  alt="matheus"/>
                </SwiperSlide>
                <SwiperSlide>
                    <img className="item-slide" src="https://github.com/rlxmts.png"  alt="matheus"/>
                </SwiperSlide>
            </Swiper>
        </BannerContainer>
    )
}

export default Banner;

