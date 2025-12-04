import ServicesWrap from "@/components/layout/ServicesWrap/ServicesWrap";
import HeadSeo from "@/components/ui/HeadSeo/HeadSeo";
// import { axiosInstance } from "@/utils/axios";
import { useTranslation } from "react-i18next";
import { useIsClient } from "usehooks-ts";

// export const getServerSideProps = async () => {
//     const { data: batteries } = await axiosInstance.get(`/services`)
//     return { props: { batteries } }
// }

export default function BatteriesPage(
    // { batteries }
) {
    const { t } = useTranslation();
    const isClient = useIsClient()
    return (
        <>
            {isClient && <>
                <HeadSeo title={t("services.batteries")} />
                <ServicesWrap type='batteries' />
            </>}
        </>
    )
}
