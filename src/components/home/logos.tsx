import Ticker from "framer-motion-ticker";
import Logo from "./logo";
import { useState } from "react";

export default function Logos() {
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    return (
        <div className="py-[38px] relative border-t border-b border-color">
            <Ticker
                isPlaying={isPlaying}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                duration={25}
            >
                {Array.from({ length: 6 }).map((_, index: number) => {
                    return <Logo index={index + 1} key={index} />;
                })}
            </Ticker>
        </div>
    );
}
