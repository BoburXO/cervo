import ServicesWrap from "@/components/layout/ServicesWrap/ServicesWrap";
import HeadSeo from "@/components/ui/HeadSeo/HeadSeo";
// import { axiosInstance } from "@/utils/axios";
import { useTranslation } from "react-i18next";
import { useIsClient } from "usehooks-ts";

// export const getServerSideProps = async () => {
//   const { data: tires } = await axiosInstance.get(`/services`)
//   return { props: { tires } }
// }

export default function TiresPage(
  // { tires }
) {
  const {t} = useTranslation()
  const isClient = useIsClient()
  return (
    <>
      {isClient && <>
        <HeadSeo title={t("services.tires")} />
        <ServicesWrap type="tires" />
      </>}
    </>
  )
}
