import React, { useState } from 'react'
import s from './CategoryWrap.module.scss'
import Container from '@/components/ui/Container/Container'
import Breadcrumbs from '@/components/ui/Breadcrumbs/Breadcrumbs'
import { useIsClient } from 'usehooks-ts'
import Card from '@/components/ui/Card/Card'
// import NotFound from '@/components/ui/NotFound/NotFound'
// import Loader from '@/components/ui/Loader/Loader'
import { useTranslation } from 'react-i18next'

const CategoryWrap = ({
    data,
    category_name,
    materials,
    // selectedMaterialID,
    // setSelectedMaterialID,
    // isLoading,
    // error
}) => {
    const isClient = useIsClient()
    const { t } = useTranslation()

    const [selectedMaterialID, setSelectedMaterialID] = useState(materials?.[0]?.id || null)

    const filteredData = selectedMaterialID
        ? data.filter(el => el.material_id === selectedMaterialID)
        : data


    // const getLocalizedText = (item, key = 'name') => {
    //     const lang = i18n.language
    //     return item?.[`${key}_${lang}`] || item?.[`${key}_en`] // fallback to English
    // }

    return (
        <>
            {isClient && (
                <section>
                    <Container>
                        <div className={s.title_wrap}>
                            <Breadcrumbs lastTitle={category_name} />
                            <span>
                                {materials?.map((material) => (
                                    <button
                                        key={material?.id}
                                        className={`${s.btn} ${selectedMaterialID === material?.id ? s.active : ''
                                            }`}
                                        onClick={() =>
                                            setSelectedMaterialID(
                                                selectedMaterialID === material?.id ? null : material?.id
                                            )
                                        }
                                    >
                                        {t(material.name)}
                                    </button>
                                ))}
                            </span>
                        </div>

                        {/* {isLoading ? (
                            <Loader />
                        ) : error ? (
                            <NotFound />
                        ) : !data?.length ? (
                            <NotFound />
                        ) : ( */}
                        <div className={s.products_wrapper}>
                            {filteredData?.map((el) => (
                                <Card
                                    key={el?.id}
                                    id={el?.id}
                                    image={el?.image}
                                    sizes={el?.sizes}
                                    item={el}
                                    name={el?.name}
                                />
                            ))}
                        </div>
                        {/* )} */}
                    </Container>
                </section>
            )}
        </>
    )
}

export default CategoryWrap