import React from 'react'
import s from './NotFound.module.scss'
import { useIsClient } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'

const NotFound = () => {
    const isClient = useIsClient()
    const { t } = useTranslation()
    return (
        <>
            {isClient && <div className={s.empty_wrap}>
                <h2>{t("not_found")}</h2>
            </div>}
        </>
    )
}

export default NotFound