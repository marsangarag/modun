import { motion } from "framer-motion";

export default function TitleAnimation({
    text,
    className,
    lacolina = false,
}: {
    text: string;
    className?: string;
    lacolina?: boolean;
}) {
    return (
        <motion.div
            initial={{ x: "-100%" }}
            whileInView={{ x: "0%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`font-bold font-mont text-center self-center relative ${className}`}
        >
            {text}
            <motion.div
                initial={{ x: "100%%" }}
                whileInView={{ x: "0%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="absolute left-0 -bottom-1 w-full"
            >
                <div
                    className={`h-0.5 w-full ${
                        lacolina
                            ? "bg-gradient-to-r from-colina to-blue"
                            : "bg-blue"
                    } `}
                ></div>
            </motion.div>
        </motion.div>
    );
}
