import { useEffect, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

import "swiper/css";
import "./reviewCarousel.css";

const ReviewCarousel = () => {
    const [reviews, setReviews] = useState([]);
    const swiperRef = useRef(null);

    useEffect(() => {
        fetch("/reviews.json")
            .then((res) => res.json())
            .then((data) => setReviews(data));
    }, []);

    if (!reviews.length) return null;

    return (
        <div className="max-w-7xl mx-auto py-16 px-4 relative">

            {/* LEFT ARROW */}
            <button
                onClick={() => swiperRef.current.slidePrev()}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-sm"
            >
                ❮
            </button>

            {/* RIGHT ARROW */}
            <button
                onClick={() => swiperRef.current.slideNext()}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 btn btn-circle btn-sm"
            >
                ❯
            </button>

            <Swiper
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                centeredSlides={true}
                spaceBetween={30}
                slidesPerView={1}   // SMALL DEVICE (default)
                breakpoints={{
                    768: {
                        slidesPerView: 1,
                    },
                    1024: {
                        slidesPerView: 3, // LARGE DEVICE → ALWAYS 3
                    },
                }}
                className="review-swiper"
            >

                {reviews.map((item) => (
                    <SwiperSlide key={item.id}>
                        <div className="review-card">
                            {/* TITLE */}
                             <p className="review-text">{item.review}</p>
                            <span className="review-line"></span>

                            {/* USER INFO */}
                            <div className="review-user">
                                <img
                                    src={item.user_photoURL}
                                    alt={item.userName}
                                    className="review-img"
                                />
                                <h3 className="review-name">{item.userName}</h3>
                            </div>

                            
                        </div>

                    </SwiperSlide>
                ))}
            </Swiper>

            {/* BOTTOM DOTS (YOUR STYLE) */}
            <div className="flex w-full justify-center gap-2 py-4">
                {reviews.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => swiperRef.current.slideTo(index)}
                        className="btn btn-xs btn-circle"
                    >
                        .
                    </button>
                ))}
            </div>
        </div>
    );
};

export default ReviewCarousel;
