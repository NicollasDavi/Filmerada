import {Swiper, SwiperSlide} from "swiper/react"
import MovieCard from "../components/MovieCard";
import React from "react";

import './Carussel.model.css'




function Carusel ({array}){
    
    
    return(
        <div >
            <Swiper 
            slidesPerView={6}
            pagination={{clickable: true}}
            navigation
            >
               
                {array.length > 0 &&
                    array.map((item) => (
                        <div className="carusel">
                        <SwiperSlide key={item.id}>
                            <MovieCard movie={item}/>
                        </SwiperSlide>
                        </div>
                    ))}
                
                
            </Swiper>
        </div>
        
    )
}

export default Carusel