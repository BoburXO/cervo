import CategoryWrap from '@/components/layout/CategoryWrap/CategoryWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { wheels } from '@/db/wheels'
import { axiosInstance } from '@/utils/axios'
import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import useSWR from 'swr'
import { useIsClient } from 'usehooks-ts'

// const fetcher = (url) => axiosInstance.get(url).then(res => res.data)

const CategoryPage = (
    // { materials }
) => {
    const isClient = useIsClient()
    const router = useRouter()
    const materials = [
        { id: 1, name: 'materials.aluminum' },
        { id: 2, name: 'materials.forged' },
    ]
    // const [materialID, setMaterialID] = useState(null)

    // useEffect(() => {
    //     if (materials?.length > 0 && !materialID) {
    //         setMaterialID(materials[0].id)
    //     }
    // }, [materials, materialID])

    // const { data, error, isLoading } = useSWR(
    //     materialID ? `/products?category_id=${router.query.id}&material_id=${materialID}` : null,
    //     fetcher
    // )

    return (
        <>
            {isClient && (
                <>
                    <HeadSeo title={router.query.category_name} />
                    <CategoryWrap
                        materials={materials}
                        // data={data || []}
                        data={wheels}
                        category_name={router.query.category_name}
                        // selectedMaterialID={materialID}
                        // setSelectedMaterialID={setMaterialID}
                        // isLoading={isLoading}
                        // error={error}
                    />
                </>
            )}
        </>
    )
}

// export async function getServerSideProps() {
//     const { data: materials } = await axiosInstance.get(`/materials/`)
//     return { props: { materials } }
// }

export default CategoryPage
