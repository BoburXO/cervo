import React from 'react'
import s from './Hero.module.scss'
import Container from '@/components/ui/Container/Container'

const Hero = () => {
    return (
        <section className={s.hero}>
            <div className={s.video}>
                <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    className={s.backgroundVideo}
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <Container>
                {/* <div className={s.poster}>
                    <img src="/img/logo.png" alt="poster" />
                </div> */}
            </Container>
        </section>
    )
}

export default Hero
