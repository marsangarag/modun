import { motion } from "framer-motion";

export default function Fade({
    direction,
    children,
}: {
    direction: string;
    children: any;
}) {
    const animationDirection = {
        left: { x: -500 },
        right: { x: 500 },
        up: { y: 500 },
    };

    return <motion.div initial={{ opacity: 0 }}>{children}</motion.div>;
}
