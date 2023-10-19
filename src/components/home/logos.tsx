import { useRef } from "react";
import Logo from "./logo";
import { useScroll, useTransform, motion } from "framer-motion";

export default function Logos() {
    const targetRef = useRef<null | HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["3%", "-95%"]);

    return (
        <section
            ref={targetRef}
            className="relative w-screen h-[300vh] my-[-200px]"
        >
            <div className="sticky top-0 flex h-screen items-center overflow-hidden">
                <motion.div style={{ x }} className="flex gap-4">
                    {Array.from({ length: 8 }).map((_: any, index: number) => {
                        return <Logo key={index} index={index} />;
                    })}
                </motion.div>
            </div>
        </section>
    );
}
