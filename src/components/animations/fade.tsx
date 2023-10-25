import { motion } from "framer-motion";

export default function Fade({
    direction,
    children,
    delay,
    className,
    myKey,
}: {
    direction: string;
    children: any;
    delay?: number;
    className?: string;
    myKey?: string;
}) {
    const animationDirection: any = {
        left: { x: "-10%" },
        right: { x: "10%" },
        up: { y: "10%" },
        none: { x: "0%", y: "0%" },
    };

    const animationConfig = {
        in: {
            opacity: 0,
            ...animationDirection[direction],
        },
        animate: {
            opacity: 1,
            ...animationDirection.none,
        },
        out: {
            opacity: 0,
            ...animationDirection[direction],
            transition: {
                type: "",
                stiffness: 500,
                damping: 50,
                duration: 2,
            },
        },
    };

    return (
        <motion.div
            variants={animationConfig}
            initial="in"
            whileInView="animate"
            viewport={{ once: true }}
            exit="out"
            transition={{
                duration: 0.5,
                delay: delay || 0,
            }}
            key={myKey || undefined}
            className={className}
        >
            {children}
        </motion.div>
    );
}
