import React from 'react'
import { useTranslation } from 'react-i18next'
import s from './Card.module.scss'

const Card = ({ image, sizes, id, item,name }) => {
    const { t } = useTranslation()
    // const lang = i18n.language
    // const name = item?.[`name_${lang}`] || item?.name_en || ''

    return (
        <div className={s.card}>
            <img src={image} alt={name} />
            <div className={s.card_body}>
                <p>{t(name)}</p>
                <span>
                    {sizes?.map((size, i) => (
                        <h6 key={i}>{size}</h6>
                    ))}
                </span>
            </div>
        </div>
    )
}

export default Card
