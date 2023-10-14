import { motion } from "framer-motion";

export default function Fade({
    direction,
    children,
    delay,
}: {
    direction: string;
    children: any;
    delay?: number;
}) {
    const animationDirection: any = {
        left: { x: -500 },
        right: { x: 500 },
        up: { y: 500 },
        none: { x: 0, y: 0 },
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
            animate="animate"
            exit="out"
            transition={{
                duration: 0.5,
                delay: delay || 0,
            }}
        >
            {children}
        </motion.div>
    );
}
