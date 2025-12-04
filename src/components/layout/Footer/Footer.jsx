import React from 'react'
import s from './Footer.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'
import { nav_links } from '@/db/nav_links'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

const Footer = () => {
    const { t } = useTranslation()
    const isClient = useIsClient()
    return (
        <>
            {isClient && <footer className={s.footer}>
                <Container>
                    <div className={s.wrapper}>
                        <Link className={s.logo} href={`/`}><img src="/img/logo.png" alt="logo" /></Link>

                        <div className={s.menu}>
                            {nav_links.map((el, i) => (
                                <Link href={el.href} key={i}>{t(el.title)}</Link>
                            ))}
                        </div>
                    </div>

                    <div className={s.rights}>
                        <p>© 2025 Cervo Global. {t("footer.title")}</p>
                    </div>
                </Container>
            </footer>}
        </>
    )
}

export default Footer