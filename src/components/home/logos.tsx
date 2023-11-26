import Ticker from "framer-motion-ticker";
import Logo from "./logo";
import { useEffect, useState } from "react";

export default function Logos() {
    const [isPlaying, setIsPlaying] = useState<boolean>(true);

    const logoArray = [0, 4, 1, 6, 2, 5, 3, 6, 7, 8];

    return (
        <div className="py-5 relative border-t border-b border-color">
            <Ticker
                isPlaying={isPlaying}
                onMouseEnter={() => setIsPlaying(false)}
                onMouseLeave={() => setIsPlaying(true)}
                duration={35}
            >
                {logoArray.map((_) => {
                    return <Logo index={_} key={_} />;
                })}
            </Ticker>
        </div>
    );
}
