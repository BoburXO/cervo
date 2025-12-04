import React from 'react'
import s from './ContactsHero.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'

const ContactsHero = (
    // { socials }
) => {
    const { t } = useTranslation()
    return (
        <section>
            <Container>
                <div className={s.about_title}>
                    <Breadcrumbs />
                    <a target='_blank'  href={`https://www.google.com/maps/place/Tashkent+City+Park/@41.316022,69.2451726,15z/data=!4m6!3m5!1s0x38ae8b40d847941d:0x5765a18b352df71e!8m2!3d41.316022!4d69.2451726!16s%2Fg%2F11c52_5y9v`}>
                        <button className={s.map}>{t("map")}</button>
                    </a>
                </div>
                <div className={s.about_hero}>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4048.945177386761!2d69.24517260747297!3d41.31602200802469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b40d847941d%3A0x5765a18b352df71e!2sTashkent%20City%20Park!5e0!3m2!1sru!2s!4v1748852403066!5m2!1sru!2s" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </div>
            </Container>
        </section>
    )
}

export default ContactsHero