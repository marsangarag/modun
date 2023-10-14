import Page from "@/components/layout/page";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";
import type { AppProps } from "next/app";
import Head from "next/head";

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <title>Modun group</title>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=0"
                />
            </Head>
            <AnimatePresence mode="wait">
                <Page>
                    <Component {...pageProps} />
                </Page>
            </AnimatePresence>
        </>
    );
};

export default appWithTranslation(MyApp);
