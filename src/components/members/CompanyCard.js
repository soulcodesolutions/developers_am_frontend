import { Link } from "gatsby";
import React, { useRef } from "react";
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';

function CompanyCard(props) {

    const { items = {}, language } = props

    const swiperRef = useRef(null);
    SwiperCore.use([Autoplay, Navigation]);

    const goNext = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slidePrev();
        }
    };

    const params = {
        slidesPerView: 1,
        centeredSlides: true,
        // slidesPerView: 3,
        loop: true,
        observer: true,
        spaceBetween: 100,
        on: {
            // realIndexChange: (swiper) => setImageIndex(swiper.realIndex)
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            700: {
                slidesPerView: 2,
                spaceBetween: 20,

            },
            1000: {
                slidesPerView: 3,
                spaceBetween: 20,

            },
        }

    }




    const NextIcon = (props) => {
        return (
            <div {...props} className="cursor-pointer bg-red-800 py-[20px] px-[5px] rounded-md">
                <svg width="24" height="24" fill="white" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" /></svg>
            </div>
        )
    }

    return (<div>
        <div className="desktop  relative">

            <div className="container mx-auto">

                <div className=" overflow-hidden  " >

                    {items.length > 0 &&
                        <Swiper {...params} ref={swiperRef}>
                            {items.map(item => CompanyBox(item, language))}

                        </Swiper>
                    }
                </div>
            </div>
                <div className="container mx-auto px-[10px]  w-full absolute z-[20] ">
                    <div className="absolute left-0 top-[calc(-150px)] -translate-x-[10px]  sm:-translate-x-[60px] rotate-180">  <NextIcon onClick={() => goPrev()} /> </div>
                    <div className="absolute right-0  top-[calc(-150px)] translate-x-[10px]  sm:translate-x-[60px] "> <NextIcon onClick={() => goNext()} /> </div>
                </div>
        </div>
    </div>);
}

export const CompanyBox = (item, language) => {
    return (<div key={item.strapi_id} className={"mx-auto py-[10px] cursor-pointer "}>
        <Link to={`/${language}/members?strapiId=${item.strapi_id}`}>
            <div className="max-w-[300px] sm:max-w-full mx-auto w-full p-2 rounded-xl cursor-pointer shadow hover:shadow-red-200 hover:shadow-md">
                <div className=" min-h-[150px] max-h-[200px]  overflow-hidden">
                    <img src={process.env.GATSBY_STRAPI_API_URL + item.photo.url} alt="" className="mx-auto" />
                </div>
                <div className="py-[10px] text-center">
                    {item.name}
                </div>
            </div>
        </Link>
    </div>)
}

export default CompanyCard;