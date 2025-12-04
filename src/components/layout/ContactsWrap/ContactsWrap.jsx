import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './ContactsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useIsClient } from 'usehooks-ts'

const ContactsWrap = (
    // { socials, general }
) => {
    const { t } = useTranslation()
    const isClient = useIsClient()

    return (
        <section className={s.contactsWrap}>
            {isClient && (
                <Container>
                    <div className={s.top}>
                        <Pretitle>{t('contactsWrap.pretitle')}</Pretitle>
                        <SectionTitle>{t('contactsWrap.title')}</SectionTitle>
                        <p dangerouslySetInnerHTML={{ __html: t('contactsWrap.description') }} />
                    </div>

                    <div className={s.wrap}>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-1.svg" alt="icon" />
                            <h3>{t('contactsWrap.email')}</h3>
                            <a target="_blank" href={`mailto:info@cervo.global`}>info@cervo.global</a>
                        </div>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-2.svg" alt="icon" />
                            <h3>{t('contactsWrap.phone')}</h3>
                            <a target="_blank" href={`tel:+998(99) 999-99-99`}>+998(99) 999-99-99</a>
                        </div>
                        <div className={s.box}>
                            <img src="/img/contacts-wrap-icon-3.svg" alt="icon" />
                            <h3>{t('contactsWrap.socials')}</h3>
                            <div className={s.socs}>

                    <a target="_blank" href="https://www.facebook.com/cervo.global"><img src="/img/social-icon-fb.svg" alt="Facebook" /></a>
                    <a target="_blank" href="https://twitter.com/cervo.global"><img src="/img/social-icon-tw.svg" alt="Twitter" /></a>
                    <a target="_blank" href="https://www.instagram.com/cervo.global"><img src="/img/social-icon-inst.svg" alt="Instagram" /></a>
                    <a target="_blank" href="https://www.linkedin.com/company/cervo.global"><img src="/img/social-icon-in.svg" alt="LinkedIn" /></a>

                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </section>
    )
}

export default ContactsWrap