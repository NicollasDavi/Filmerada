import {Swiper, SwiperSlide} from "swiper/react"
import MovieCard from "../components/MovieCard";
import React from "react";

import './Carussel.model.css'




function Carusel ({array}){
    
    
    return(
        <div>
            <Swiper 
            slidesPerView={4}
            pagination={{clickable: true}}
            navigation
            >
                {array.length > 0 &&
                    array.map((item) => (
                        <SwiperSlide key={item.id}>
                            <MovieCard movie={item}/>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
        
    )
}

export default Carusel