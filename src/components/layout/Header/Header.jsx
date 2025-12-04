import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import s from './Header.module.scss'
import Container from '@/components/ui/Container/Container'
import Link from 'next/link'
import Button from '@/components/ui/Button/Button'
import Dropdown from '@/components/ui/Dropdown/Dropdown'
import { nav_links } from '@/db/nav_links'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'
import { useModalStore } from '@/stores/useModalStore'

const Header = () => {
    const [isActive, setIsActive] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const router = useRouter()
    const isMainPage = router.pathname === '/'
    const { t, i18n } = useTranslation()
    const isClient = useIsClient()

    const { openApplicationModal } = useModalStore()

    const changeLanguage = (language) => {
        i18n.changeLanguage(language);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = isActive ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [isActive])

    const toggleMenu = () => setIsActive(prev => !prev)

    const handleLinkClick = () => setIsActive(false)

    const handleApplyClick = () => {
        openApplicationModal()
    }

    const mainPageClass = isMainPage && !scrolled ? s.mainpage : ''

    return (
        <>
            <header className={`${s.header} ${mainPageClass} ${scrolled ? s.scrolled : ''}`}>
                {isClient && <Container>
                    <div className={s.wrapper}>
                        <Link className={s.logo} href="/">
                            <img src="/img/logo.png" alt="logo" />
                        </Link>

                        <nav className={`${s.nav} ${isActive ? s.active : ''}`}>
                            {nav_links.map((el, i) => (
                                <Link key={i} href={el.href} onClick={handleLinkClick}>
                                    {t(el.title)}
                                </Link>
                            ))}
                        </nav>

                        <div className={s.lang}>
                            <Dropdown
                                defaultSelected={i18n.language}
                                onChange={(langId) => changeLanguage(langId)}
                            />
                        </div>

                        <div className={s.apply_btn} onClick={handleApplyClick}>
                            <Button apply >{t("btn.apply")}</Button>
                        </div>

                        <div onClick={toggleMenu} className={`${s.burger} ${isActive ? s.active : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </Container>}
            </header>
        </>
    )
}

export default Header