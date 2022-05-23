import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const Container = styled.div`
    width: 100%;
    height: 90vh;
`
const Img = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const Slider = () => {
  return (
    <Container>
        <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2700,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://u4n2q9h4.rocketcdn.me/wp-content/images/2021/05/off-white-nike-air-force-1-low-university-gold-dd1876-700-preview-ed0.jpg.webp" /> </SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Slider