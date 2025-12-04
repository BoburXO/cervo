import "@/styles/reset.scss";
import "@/styles/globals.scss";
import Header from "@/components/layout/Header/Header";
import Feedback from "@/components/layout/Feedback/Feedback";
import Footer from "@/components/layout/Footer/Footer";
import '../i18n'
import Modal from "@/components/ui/Modal/Modal";
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/next"


export default function App({ Component, pageProps }) {
  return (
    <>
      <SpeedInsights />
      <Analytics />

      <Header />
      <Component {...pageProps} />
      <ProgressBar
        height="4px"
        color="#fff"
        options={{ showSpinner: false }}
        shallowRouting
      />
      <Feedback />
      <Footer />

      <Modal />
    </>
  );
}