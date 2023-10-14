import { useRouter } from "next/router";
import Header from "./header";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useRef } from "react";

export default function Page({ children }: { children: any }) {
    const router = useRouter();
    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => console.log(latest));

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            key={router.pathname}
            transition={{ duration: 1 }}
            className="w-screen h-screen relative"
        >
            <Header />
            <div
                className={`absolute inset-0 w-full h-full pt-[200px] overflow-y-scroll`}
            >
                {children}
            </div>
        </motion.div>
    );
}
