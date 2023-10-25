import Ticker from "framer-motion-ticker";
import Logo from "./logo";
import { useState } from "react";
import { useThemeSwitcher } from "@/lib/helper";

export default function Logos() {
    const { theme } = useThemeSwitcher();
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    return (
        <div className="py-10 relative border-t border-b border-color">
            <Ticker
                isPlaying={isPlaying}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                duration={35}
            >
                {Array.from({ length: theme === "dark" ? 15 : 17 }).map(
                    (_, index: number) => {
                        return <Logo index={index} key={index} />;
                    }
                )}
            </Ticker>
        </div>
    );
}
