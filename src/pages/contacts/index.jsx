import ContactsHero from '@/components/layout/ContactsHero/ContactsHero'
import ContactsWrap from '@/components/layout/ContactsWrap/ContactsWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
// import { axiosInstance } from '@/utils/axios'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

// export const getServerSideProps = async () => {
//     const { data: socials } = await axiosInstance.get(`/socials`)
//     const { data: general } = await axiosInstance.get(`/general`)
//     return { props: { socials, general } }
// }

const Contacts = (
    // { socials, general }
) => {
    const { t } = useTranslation()
    const isClient = useIsClient()
    return (
        <>
            {isClient && <>
                <HeadSeo title={t("nav.link5")} />
                <ContactsHero />
                <ContactsWrap />
            </>}
        </>
    )
}

export default Contacts