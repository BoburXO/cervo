import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import s from './Breadcrumbs.module.scss'

const Breadcrumbs = ({ lastTitle, white = false, staticItems = [] }) => {
    const router = useRouter()

    const pathParts = router.asPath.split('?')[0].split('/').filter(Boolean)

    const breadcrumbs = pathParts.map((part, index) => {
        const isProduct = part === 'product'
        const partForHref = isProduct ? 'category' : part

        const href = '/' + pathParts
            .slice(0, index + 1)
            .map((p, i) => (i === index && isProduct ? 'category' : p))
            .join('/')

        const isLast = index === pathParts.length - 1

        const name =
            isLast && lastTitle
                ? lastTitle
                : isProduct
                    ? 'Category'
                    : decodeURIComponent(part.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()))

        return (
            <React.Fragment key={href}>
                <span className={`${s.separator} ${white ? s.whiteText : ''}`}>/</span>
                {isLast && lastTitle ? (
                    <Link href="#" className={`${s.link} ${white ? s.whiteText : ''}`}>{name}</Link>
                ) : (
                    <Link href={href} className={`${s.link} ${white ? s.whiteText : ''}`}>{name}</Link>
                )}
            </React.Fragment>
        )
    })

    const pageTitle = lastTitle || (
        pathParts.length > 0
            ? decodeURIComponent(pathParts[pathParts.length - 1])
                .replace(/-/g, ' ')
                .replace(/\b\w/g, l => l.toUpperCase())
            : 'Home'
    )

    return (
        <nav className={s.breadcrumbs}>
            <h3 className={white ? s.whiteText : ''}>{pageTitle}</h3>
            <div>
                <Link href="/" className={`${s.link} ${white ? s.whiteText : ''}`}>Home</Link>

                {/* Вставляем кастомные пути (если есть) */}
                {staticItems.map((item, idx) => (
                    <React.Fragment key={idx}>
                        <span className={`${s.separator} ${white ? s.whiteText : ''}`}>/</span>
                        <Link href={item.href} className={`${s.link} ${white ? s.whiteText : ''}`}>
                            {item.label}
                        </Link>
                    </React.Fragment>
                ))}

                {breadcrumbs}
            </div>
        </nav>
    )
}

export default Breadcrumbs
