import { useRouter } from "next/router";
import Header from "./header";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef, useState } from "react";
import Footer from "./footer";

export default function Page({ children }: { children: any }) {
    const router = useRouter();
    const [scrollPos, setScrollPos] = useState<number>(0);
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => setScrollPos(latest));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={router.pathname}
            transition={{ duration: 1 }}
            className="w-screen min-h-screen relative"
        >
            <Header scrollPos={scrollPos} />
            <div
                className={`pt-20 md:pt-0 overflow-y-scroll overflow-x-hidden`}
            >
                {children}
                <Footer />
            </div>
        </motion.div>
    );
}
