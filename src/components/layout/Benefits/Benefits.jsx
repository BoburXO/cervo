import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Benefits.module.scss'
import Container from '@/components/ui/Container/Container'
import Pretitle from '@/components/ui/Pretitle/Pretitle'
import SectionTitle from '@/components/ui/SectionTitle/SectionTitle'
import { useIsClient } from 'usehooks-ts'

const Benefits = () => {
    const { t } = useTranslation()
    const isClient = useIsClient()

    const benefits = t("benefits.cards", { returnObjects: true })

    return (
        <section className={s.benefits}>
            {isClient && (
                <Container>
                    <div className={s.top}>
                        <Pretitle>{t('benefits.pretitle')}</Pretitle>
                        <SectionTitle white>{t("benefits.title")}</SectionTitle>
                        <p dangerouslySetInnerHTML={{ __html: t("benefits.description") }} />
                    </div>

                    <div className={s.wrapper}>
                        {benefits?.map((benefit, index) => (
                            <div className={s.card} key={index}>
                                <img src={benefit.icon} alt="icon" />
                                <h3>{benefit.title}</h3>
                                <p dangerouslySetInnerHTML={{ __html: benefit.text }} />
                            </div>
                        ))}
                    </div>
                </Container>
            )}
        </section>
    )
}

export default Benefits