import { motion } from "framer-motion";

export default function TitleAnimation({
    text,
    className,
}: {
    text: string;
    className?: string;
}) {
    return (
        <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`font-bold font-mont self-center relative ${className}`}
        >
            {text}
            <motion.div
                initial={{ x: "200%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 -bottom-1 w-full"
            >
                <div className="border-b border-2 border-blue"></div>
            </motion.div>
        </motion.div>
    );
}
