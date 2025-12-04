import Benefits from '@/components/layout/Benefits/Benefits'
import ContactsWrap from '@/components/layout/ContactsWrap/ContactsWrap'
import Hero from '@/components/layout/Hero/Hero'
import Numbers from '@/components/layout/Numbers/Numbers'
import HeadSeo from '@/components/ui/HeadSeo/HeadSeo'
// import { axiosInstance } from '@/utils/axios'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { useIsClient } from 'usehooks-ts'


// export const getServerSideProps = async () => {
//   const { data: numbers } = await axiosInstance.get(`/numbers`)
//   const { data: benefits } = await axiosInstance.get(`/benefits`)
//   const { data: socials } = await axiosInstance.get(`/socials`)
//   const { data: general } = await axiosInstance.get(`/general`)
//   return { props: { numbers, benefits, socials, general } }
// }
// 1

const Home = (
  // { numbers, benefits, socials, general }
) => {
  const { t } = useTranslation()
  const isClient = useIsClient()
  return (
    <>
      {isClient && <>
        <HeadSeo title={t("pages.main")} />
        <Hero />
        <Numbers/>
        <Benefits />
        <ContactsWrap />
      </>
      }
    </>
  )
}

export default Home