import React, { useState, useRef } from 'react'
import s from './BatteriesWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Mousewheel, Keyboard } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const BatteriesWrap = () => {
    const batterySizes = [
        '40AH', '50AH', '60AH', '70AH', '80AH', '90AH',
        '100AH', '120AH', '135AH', '150AH', '190AH', '200AH', '225AH'
    ]

    const [selectedSize, setSelectedSize] = useState(batterySizes[0])
    const swiperRef = useRef(null)

    const handleSlideChange = (swiper) => {
        const index = swiper.realIndex
        setSelectedSize(batterySizes[index])
    }

    const handleSizeClick = (size, index) => {
        setSelectedSize(size)
        if (swiperRef.current) {
            swiperRef.current.slideToLoop(index)
        }
    }

    return (
        <section className={s.batteriesWrap}>
            <Container>
                <div className={s.main}>
                    <img className={s.main_bg} src="/img/batteries-bg.png" alt="bg" />

                    <div className={s.top}>
                        <Breadcrumbs white={true}
                            staticItems={[
                                { label: 'Category', href: '/category' },
                            ]}
                        />
                    </div>

                    <div className={s.wrapper}>
                        <div className={s.slider}>
                            <Swiper
                                onSwiper={(swiper) => (swiperRef.current = swiper)}
                                onSlideChange={handleSlideChange}
                                navigation
                                spaceBetween={20}
                                slidesPerView={1}
                                loop
                                mousewheel
                                keyboard
                                modules={[Navigation, Mousewheel, Keyboard]}
                                className={s.customSwiper}
                            >
                                {batterySizes.map((_, i) => (
                                    <SwiperSlide key={i}>
                                        <img
                                            className={s.slide_image}
                                            src="/img/battery-1.png"
                                            alt={`Cervo Battery ${batterySizes[i]}`}
                                        />
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>

                        <div className={s.wrap}>
                            <div className={s.wrap_top}>
                                <div>
                                    <h5>2025</h5>
                                    <h2>Cervo Accumulators</h2>
                                </div>

                                <div className={s.wrap_info}>
                                    <div className={s.wrap_info_card}>
                                        <p>Power</p>
                                        <b>{selectedSize}</b>
                                    </div>
                                    <div className={s.wrap_info_card}>
                                        <p>ISO</p>
                                        <b>9001</b>
                                    </div>
                                    <div className={s.wrap_info_card}>
                                        <p>For</p>
                                        <div className={s.wrap_cars}>
                                            <img src="/img/icon-car-1.svg" alt="icon" />
                                            <img src="/img/icon-car-2.svg" alt="icon" />
                                            <img src="/img/icon-car-3.svg" alt="icon" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={s.content}>
                                <p><span>CERVO BATTERIES</span> are specially designed to efficiently meet the power supply demands of equipment and engines across a wide range of car makes and models...</p>
                                <p>Thanks to advanced technologies and specially formulated chemical compositions, CERVO BATTERIES are known for their long service life...</p>
                                <p>Reliability, durability, and compatibility with modern automotive requirements make CERVO BATTERIES the optimal choice...</p>
                                <p>The batteries are specially designed for high-starting power and cycle capacity.</p>
                            </div>

                            <div className={s.sizes}>
                                <h4>Available of Cervo Batteries:</h4>

                                <div className={s.sizes_charts}>
                                    {batterySizes.map((size, index) => (
                                        <div
                                            key={size}
                                            className={`${s.size_chart} ${selectedSize === size ? s.active : ''}`}
                                            onClick={() => handleSizeClick(size, index)}
                                        >
                                            {size}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default BatteriesWrap
