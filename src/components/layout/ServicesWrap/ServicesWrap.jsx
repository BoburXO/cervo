import React from 'react'
import Link from 'next/link'
import s from './ServicesWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useTranslation } from 'react-i18next'

const ServicesWrap = (
    { type }
) => {
    const { t } = useTranslation()
    const data = [
        {
            id: 1,
            name: 'services.batteries',
            slug: 'batteries',
            title: 'services.title_battery',
            desc: 'services.desc_battery'
        },
        {
            id: 2,
            name: 'services.tires',
            slug: 'tires',
            title: 'services.title_tire',
            desc: 'services.desc_tire'
        },
        {
            id: 3,
            name: 'services.wheels',
            slug: 'wheels',
            title: 'services.title_wheel',
            desc: 'services.desc_wheel'
        }
    ];

    const currentTab = data.find(tab => tab.slug === type) || data[0];
    return (
        <>
            <section className={s.servicesWrap}>
                <Container>
                    <div className={s.top}>
                        <div className={s.top_wrap}>
                            <Breadcrumbs white />
                            <div className={s.top_category}>
                                {data.map(tab => (
                                    <Link
                                        key={tab.id}
                                        href={`/services/${tab.slug}`}
                                        className={tab.slug === type ? s.activeTab : ''}
                                    >
                                        {t(tab.name)}
                                    </Link>
                                ))}
                            </div>

                        </div>

                        <div className={s.title}>
                            <h3>{t("nav.link3")}</h3>
                            <h2>
                                <span>{t(currentTab.name).toUpperCase()}</span>
                                <br />
                                {t("warranty")}
                            </h2>
                        </div>
                    </div>
                </Container>
            </section>

            <section className={s.content}>
                <Container>
                    <div className={s.content_box}>
                        <div>
                            <h4>2025</h4>
                            <h3>{t(currentTab.title)}</h3>
                        </div>
                        <div dangerouslySetInnerHTML={{ __html: t(currentTab.desc) }} />
                    </div>
                </Container>
            </section>
        </>
    )
}

export default ServicesWrap