import React from 'react'
import s from './ProductsWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import { useTranslation } from 'react-i18next'
import Link from 'next/link'
import NotFound from '@/components/ui/NotFound/NotFound'
import { categories } from '@/db/categories'

const ProductsWrap = () => {
    const isClient = useIsClient()
    const { t } = useTranslation()

    const getHref = (name) => {
        if (name === "categories.wheels.name") return `/category/3?category_name=Wheels`
        if (name === "categories.tires.name") return '/product/2'
        if (name === "categories.batteries.name") return '/batteries'
        return '#'
    }

    return (
        <>
            {isClient && (
                <section className={s.productsWrap}>
                    <Container>
                        <Breadcrumbs />

                        {categories && categories.length ? (
                            <div className={s.wrapper}>
                                {categories.map((cat) => {
                                    const translatedName = t(cat.name)
                                    const translatedDesc = t(cat.description)
                                    const href = getHref(cat.name)

                                    return (
                                        <Link key={cat.id} href={href} className={s.card}>
                                            <img src={cat.image} alt={translatedName} />
                                            <h3>{translatedName}</h3>
                                            {translatedDesc && <p>{translatedDesc}</p>}
                                        </Link>
                                    )
                                })}
                            </div>
                        ) : (
                            <NotFound />
                        )}

                        <div className={s.inner}>
                            <h2>{t('products.title')}</h2>
                            <p>{t('products.description')}</p>
                        </div>
                    </Container>
                </section>
            )}
        </>
    )
}

export default ProductsWrap