import { useRouter } from "next/router";
import Header from "./header";
import { motion } from "framer-motion";
import Footer from "./footer";

export default function Page({ children }: { children: any }) {
    const router = useRouter();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={router.pathname}
            transition={{ duration: 1 }}
            className="w-screen min-h-screen relative"
        >
            <Header />
            <div className={`pt-20 md:pt-0`}>
                {children}
                <Footer />
            </div>
        </motion.div>
    );
}
