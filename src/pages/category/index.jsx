import ProductsWrap from '@/components/layout/ProductsWrap/ProductsWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'


// export const getServerSideProps = async () => {
//     const { data } = await axiosInstance.get(`/categories/`)
//     return {
//         props: { data }
//     }
// }



const ProductsPage = (
    // { data }
) => {
    const { t } = useTranslation()
    const isClient = useIsClient()
    return (
        <>
            {isClient &&
                <>
                    <HeadSeo title={t("pages.products")} />
                    <ProductsWrap/>
                </>
            }
        </>
    )
}

export default ProductsPage