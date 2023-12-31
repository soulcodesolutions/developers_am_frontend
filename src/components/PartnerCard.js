import React, { useRef } from "react";
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';
import 'swiper/css/bundle';
import { Link } from "gatsby";


function PartnerCard(props) {
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
        // centeredSlides: true,
        // slidesPerView: 3,
        loop: true,
        observer: true,
        spaceBetween: 20,
        on: {
            // realIndexChange: (swiper) => setImageIndex(swiper.realIndex)
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false
        },
        breakpoints: {
            700: {
                slidesPerView:2,
                spaceBetween: 20,

            },
            1000: {
                slidesPerView: 4,
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

    return (
        <div className="">
            <div className="desktop  relative">

                <div className=" mx-auto">
                    <div className=" overflow-hidden  " >
                        {items.length > 0 &&
                            <Swiper {...params} ref={swiperRef}>
                                {items.map((item) => PartnerBox(item, language))}
                            </Swiper>
                        }
                    </div>
                </div>
                <div className="container mx-auto px-[10px] w-full absolute z-[20] ">
                    <div className="absolute left-0 top-[-180px] -translate-x-[10px]  sm:-translate-x-[60px] rotate-180">  <NextIcon onClick={() => goPrev()} /> </div>
                    <div className="absolute right-0  top-[-180px] translate-x-[10px]  sm:translate-x-[60px] "> <NextIcon onClick={() => goNext()} /> </div>
                </div>
            </div>
        </div>
    )

}

export const PartnerBox = (item, language) => {
    return (<div
        key={item?.id}
        className="px-[20px] sm:px-0 "
        >
             <Link to={`/${language}/partners?strapiId=${item.strapi_id}`}>

        <div className=" rounded-xl p-[10px] bg-white min-h-[300px] flex flex-col justify-between items-center " >
            <div className="grow flex flex-col items-center justify-center photo mx-auto  overflow-hidden w-full ">
                <div className="">
                    <img src={process.env.GATSBY_STRAPI_API_URL + item?.photo?.url} alt="" className="w- max-h-[200px]  mx-auto " />
                </div>
            </div>
            <div className=" text-slate-500 text-center pt-[20px] text-[14px] 2xl:text-[14px]">
                {item.name}
            </div>

        </div>
             </Link>
    </div>)
}

export default PartnerCard;