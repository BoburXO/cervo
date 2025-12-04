import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useTranslation } from 'react-i18next';
import { useIsClient } from 'usehooks-ts';

const HeadSeo = ({ title, description, image }) => {
    const { t } = useTranslation();
    const router = useRouter();
    const isClient = useIsClient();
    const siteName = 'Cervo';
    const domain = 'https://cervo.uz';

    const defaultTitle = 'Mainpage';
    const defaultDescription = t("seo.desc");
    const pageTitle = title || defaultTitle;
    const pageDescription = description || defaultDescription;
    const fullTitle = `${pageTitle} | ${siteName}`;
    const canonical = `${domain}${router.asPath}`;

    const ogImage = image || `${domain}/images/og-image.jpg`;

    return (
        <Head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
            <title>{fullTitle}</title>
            <meta name="description" content={pageDescription} />
            {isClient && <meta name="keywords" content={t("seo.keyword")} />}

            <link rel="canonical" href={canonical} />
            <link rel="icon" href="/favicon.ico" />

            {/* Open Graph */}
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={pageDescription} />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={canonical} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:locale" content="ru_RU" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            <meta name="twitter:description" content={pageDescription} />
            <meta name="twitter:image" content={ogImage} />

            {/* robots */}
            {router.pathname.includes('/admin') || router.pathname.includes('/checkout') ? (
                <meta name="robots" content="noindex, nofollow" />
            ) : (
                <meta name="robots" content="index, follow" />
            )}
        </Head>
    );
};

export default HeadSeo;
