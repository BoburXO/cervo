import ServicesWrap from "@/components/layout/ServicesWrap/ServicesWrap";
import HeadSeo from "@/components/ui/HeadSeo/HeadSeo";
// import { axiosInstance } from "@/utils/axios";
import { useTranslation } from "react-i18next";
import { useIsClient } from "usehooks-ts";

// export const getServerSideProps = async () => {
//     const { data: wheels } = await axiosInstance.get(`/services`)
//     return { props: { wheels } }
// }

export default function WheelsPage(
    // { wheels }
) {
    const isClient = useIsClient()
    const { t } = useTranslation()
    return (
        <>
            {isClient && <>
                <HeadSeo title={t("services.wheels")} />
                <ServicesWrap type="wheels" />
            </>}
        </>
    )
}
