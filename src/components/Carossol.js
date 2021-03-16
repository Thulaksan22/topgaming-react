import React, {Component} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper';

import 'swiper/swiper.scss';
import './swiper.css';
import JeuxService from "../services/JeuxService";

/*import img1 from './img/AC1_DestroyAllHumans.jpg';
import img2 from './img/AC2_Control-1.jpg';
import img3 from './img/AC3_StarWarsJediFallenOrder1-1.jpg';
import img4 from './img//AV4_DevilMayCry5.jpg';
import img5 from './img/AV3_AssassinsCreedOdyssey-1.jpg';*/

import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';


SwiperCore.use([Navigation, Pagination, Autoplay, EffectCoverflow ]);

export default class Carossol extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jeux: [],
    };
  }

  componentDidMount() {
    JeuxService.getJeux().then((res) => {
      this.setState({ jeux: res.data });
    });
  }

  render() {

    const swipMain = {
      width:"auto", 
      margin:"auto", 
      minWidth: "20rem"
    };

    return (
      <Swiper style={swipMain}
          spaceBetween={5}
          slidesPerView={3}
          
          loop={true}
          autoplay={{
              delay: 1600,
              disableOnInteraction: false
          }}
          
          effect="Overflow"

          navigation
          pagination={{clickable: true}}
          /*onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}*/
        >
          { this.state.jeux.map(jeu =>
            <SwiperSlide key={jeu.id}>
              <img style={{ height: "21.875rem"}} src={"images/"+jeu.image} alt={jeu.nom}/>
            </SwiperSlide>
          )} 
      </Swiper>
    );
  }
}
