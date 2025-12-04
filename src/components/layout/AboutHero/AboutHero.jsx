import React from 'react'
import s from './AboutHero.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'

const AboutHero = () => {
    const { t } = useTranslation()

    return (
        <>
            <section className={s.contacts_hero}>
                <Container>
                    <div className={s.cotacts_title}>
                        <Breadcrumbs white />
                        <button className={s.btn}>{t("nav.link4")}</button>
                    </div>

                    <div className={s.title}>
                        <h1><span>ABOUT</span></h1>
                        <h2><span>CERVO</span> GLOBAL</h2>

                        {/* SLOGAN */}
                        <p>{t("about.slogan")}</p>
                    </div>
                </Container>
            </section>

            <section className={s.content}>
                <Container>
                    <div className={s.content_box}>
                        
                        {/* YEAR + TITLE */}
                        <div>
                            <h4>2025</h4>
                            <h3>{t("about.title")}</h3>
                        </div>

                        {/* DESCRIPTION TEXT (desc1 + desc2) */}
                        <div
                            dangerouslySetInnerHTML={{
                                __html: `
                                    <p>${t("about.desc1")}</p>
                                    <br />
                                    <p>${t("about.desc2")}</p>
                                `
                            }}
                        />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default AboutHero