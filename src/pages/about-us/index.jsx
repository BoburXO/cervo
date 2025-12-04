import AboutHero from '@/components/layout/AboutHero/AboutHero'
import ContactsWrap from '@/components/layout/ContactsWrap/ContactsWrap'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
import { axiosInstance } from '@/utils/axios'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'

// export const getServerSideProps = async () => {
//   const { data: socials } = await axiosInstance.get(`/socials`)
//   const { data: general } = await axiosInstance.get(`/general`)
//   return { props: { socials, general } }
// }

const AboutUs = (
  // { socials, general }

) => {
  const { t } = useTranslation()
  const isClient = useIsClient()
  return (
    <>
      {isClient && <>
        <HeadSeo title={t("nav.link4")} />
        <AboutHero />
        <ContactsWrap />
      </>}
    </>
  )
}

export default AboutUs