import Page from "@/components/layout/page";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { appWithTranslation } from "next-i18next";
import { ThemeProvider } from "next-themes";
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
                <ThemeProvider attribute="class" defaultTheme="light">
                    <Page>
                        <Component {...pageProps} />
                    </Page>
                </ThemeProvider>
            </AnimatePresence>
        </>
    );
};

export default appWithTranslation(MyApp);
