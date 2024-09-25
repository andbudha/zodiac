import './styles.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { EffectCoverflow } from 'swiper/modules';
import { useContext } from 'react';
import { DataContext } from '../../context/DataContext';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const { signs } = useContext(DataContext);
  const signList = signs?.map((sign) => (
    <SwiperSlide key={sign.id}>
      <NavLink to={`/signs/${sign.id}`}>
        <img src={sign.image} />
      </NavLink>
    </SwiperSlide>
  ));
  return (
    <div className={'main_home_box'}>
      <h1 className={'header'}>Zodiac Signs</h1>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow]}
        className="mySwiper"
      >
        {signList}
      </Swiper>
    </div>
  );
};
