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
            <SwiperSlide> <Img src="https://cdn.sanity.io/images/c1chvb1i/production/253b3994cd08ab00fee704939979d7b1b3155c3d-1903x1269.jpg" /> </SwiperSlide>
            <SwiperSlide> <Img src="https://img01.ztat.net/article/spp-media-p1/ead1b7501a9f45fa92d41ec16bb124b6/c0c296c786b64b73988cca5d40f4f2d2.jpg?imwidth=1800&filter=packshot&imformat=jpeg" /> </SwiperSlide>
        </Swiper>
    </Container>
  )
}

export default Slider