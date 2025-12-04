import React, { useState } from 'react'
import s from './ProductWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs';
import { useTranslation } from 'react-i18next';
import { useIsClient } from 'usehooks-ts';
import NotFound from '@/components/ui/NotFound/NotFound';

const ProductWrap = ({ data }) => {
    const [active, setActive] = useState(0)
    const [focusedSize, setFocusedSize] = useState(0)
    const { t } = useTranslation()
    const isClient = useIsClient()

    // const getLocalizedText = (item, key) => {
    //     const lang = i18n.language
    //     return item?.[`${key}_${lang}`] || item?.[`${key}_en`] || ''
    // }

    const characteristics = [
        { name: t('characteristics.dry'), rating: 5 },
        { name: t('characteristics.wet'), rating: 4 },
        { name: t('characteristics.snow'), rating: 3 },
        { name: t('characteristics.noise'), rating: 2 },
        { name: t('characteristics.treadwear'), rating: 1 }
    ];

    const renderRatingFields = (rating) => {
        const maxFields = 5;
        const filledFields = Math.round(rating);

        return Array.from({ length: maxFields }, (_, index) => (
            <div
                key={index}
                className={`${s.table_field} ${index < filledFields ? s.filled : ''}`}
            />
        ));
    };

    return (
        <section className={s.productWrap}>
            {!data ? (
                <NotFound />
            ) : (
                <Container>
                    <Breadcrumbs lastTitle={t(data?.name)} />
                    <div className={s.wrapper}>
                        <div className={s.gallery}>
                            <div className={s.gallery_images}>
                                {data?.images?.map((el, i) => (
                                    <img
                                        className={i === active ? s.active : ''}
                                        onClick={() => setActive(i)}
                                        src={el}
                                        alt={i}
                                        key={i}
                                    />
                                ))}
                            </div>

                            <img className={s.gallery_main_image} src={data?.images[active]} alt="image" />
                        </div>

                        <div className={s.content}>
                            <div className={s.top}>
                                <h1>{t(data?.name)}</h1>
                                <h2>{t(data?.category?.name)}</h2>
                            </div>

                            <h3>{t(data?.subtitle)}</h3>

                            <div
                                className={s.description}
                                // ✔ description ham i18n bo‘ldi
                                dangerouslySetInnerHTML={{
                                    __html: t(data?.description)
                                }}
                            />

                            <div className={s.sizes}>
                                {data?.sizes?.map((size, i) => (
                                    <div
                                        key={i}
                                        className={`${s.size} ${focusedSize === i ? s.active_size : ''}`}
                                        onClick={() => setFocusedSize(i)}
                                    >
                                        {size}
                                    </div>
                                ))}
                            </div>

                            <div className={s.table}>
                                {isClient && characteristics.map((characteristic, index) => (
                                    <div key={index} className={s.table_row}>
                                        <b>{characteristic.name}</b>

                                        <div className={s.table_fields}>
                                            {renderRatingFields(characteristic.rating)}
                                        </div>

                                        <b>{characteristic.rating}</b>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Container>
            )}
        </section>
    )
}

export default ProductWrap