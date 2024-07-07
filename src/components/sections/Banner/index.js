
import { Swiper, SwiperSlide } from "swiper/react";
import {EffectFade, Autoplay, Pagination, Navigation } from 'swiper/modules';
import styled from "styled-components";


const BannerContainer = styled.section`
    height:100vh;

    .item-slide{
    height: 100%;
    width: 100%;
    object-fit: cover; 
    }
`

const imagensBanner = [
    {
        alt: 'Casal ao por do sol',
        url: `${process.env.PUBLIC_URL}/img/aliancas.jpg`
    },
    {
        alt: 'Casal ao por do sol',
        url: `${process.env.PUBLIC_URL}/img/casal0.jpg`
    },
    {
        alt: 'Casal ao por do sol',
        url: `${process.env.PUBLIC_URL}/img/casal1.jpg`
    },
    {
        alt: 'Casal ao por do sol',
        url: `${process.env.PUBLIC_URL}/img/casamento.jpg`
    }
]

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
                {imagensBanner.map( img => {
                return(
                    <SwiperSlide key={img.url}>
                        <img className="item-slide" src={img.url} alt={img.alt} />
                    </SwiperSlide>
                )
                })}
            </Swiper>
        </BannerContainer>
    )
}

export default Banner;

