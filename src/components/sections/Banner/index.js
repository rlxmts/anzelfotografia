
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const BannerContainer = styled.section`

    .slide-mobile{
        display:none;
    }

    @media screen and (max-width: 600px){
        .slide-desktop{
            display:none;
        }
        
        .slide-mobile{
            display: flex;
            height: auto;

            div{
                height: auto;
            }

            img{
                width: 100%;
            }
        }
    }
`

const imagensBanner = [ 
    './img/trabalhos/Thaina-Erick-prewedding/4.jpeg', 
    './img/trabalhos/Alessandra-lifystyle/7.jpg',
    './img/trabalhos/Danielle-Wellerson-casamento/5.jpg',
    './img/trabalhos/Fernanda-Henrique-externa/13.jpg',           
    './img/trabalhos/Hevellyn-Hiago-prewedding/5.jpg',           
    './img/trabalhos/Marlon-Thayane-prewedding/2.jpg',           
    ]

const Banner = ()=> {
    
    return(
        <BannerContainer>
            <Swiper 
                watchSlidesProgress={true} 
                slidesPerView={3} 
                className="mySwiper slide-desktop"
                navigation={true}
                modules={[Pagination, Navigation]}
            >
                {imagensBanner.map( item => {
                    return(
                        <SwiperSlide key={item}><img className="imagem" src={item} alt="Foto de trabalhos da AnzelFotografia."></img></SwiperSlide>
                    )
                })}
            </Swiper>

            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                delay: 2500,
                disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper slide-mobile"
            >
                {imagensBanner.map( item => {
                        return(
                            <SwiperSlide key={item}><img src={item} alt="Foto de trabalhos da AnzelFotografia."></img></SwiperSlide>
                        )
                })}
            </Swiper>

        </BannerContainer>
    )
}

export default Banner;

