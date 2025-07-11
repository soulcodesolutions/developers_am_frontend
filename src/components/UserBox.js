import React, { useRef } from "react";
import { Link, navigate } from "gatsby";

import 'swiper/css/bundle';
import Swiper from 'react-id-swiper';
import SwiperCore, { Autoplay, Navigation } from 'swiper';

export function UserCard(props) {
    const { items = {}, language , page = "council"} = props



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
            1000: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 20,
            }
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
                                {items.map((item) => UserBox({item, language, page}))}

                            </Swiper>
                        }
                    </div>
                </div>
                <div className="container mx-auto px-[10px] h-full w-full absolute z-[20] ">
                    <div className="absolute left-0 top-[calc(-180px)] -translate-x-[10px]  sm:-translate-x-[60px] rotate-180">  <NextIcon onClick={() => goPrev()} /> </div>
                    <div className="absolute right-0  top-[calc(-180px)] translate-x-[10px]  sm:translate-x-[60px] "> <NextIcon onClick={() => goNext()} /> </div>
                </div>
            </div>
        </div>
    )
}

function UserBox({item = {}, language, page = "council"}) {

    // const navigate = useNavigate()

    const navigateTo = () => {
        // alert("")
        navigate(`/${language}/${page}?strapiId=${item.strapi_id}`)
    }

    // console.log(item?.strapi_id)

    return (<div
            onClick={() => navigateTo()}
            key={item?.strapi_id} 
            className="max-w-[250px]_ bg-white rounded-xl p-[20px] _max-h-[350px] h-full min-h-[280px] " >
          {/* <Link to={`/${language}/council?strapiId=${item.strapi_id}`}> */}
        <div className="flex flex-col justify-between items-center h-full  ">

            <div  className={`max-w-[200px] lg:max-w-[180px] photo mx-auto rounded-full overflow-hidden max-h-[170px]  ${!item?.photo?.url && "bg-sky-100 w-full"}`}>
                
                <img src={`${process.env.GATSBY_STRAPI_API_URL}${item?.photo?.url}`} alt="" className="w-full min-h-[170px] " />
            </div>
            <div className="">
                <div className="text-[16px] 2xl:text-[18px] text-center pt-[20px]">
                    {item?.name}
                </div>
                {/* <div className="text-[16px] text-center  text-slate-500">
                    {item?.position}
                </div> */}
            </div>
        </div>
          {/* </Link> */}
    </div>)
}

export default UserBox;