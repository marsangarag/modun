import Ticker from "framer-motion-ticker";
import Logo from "./logo";

export default function Logos() {
    return (
        <div className="py-[43.5px] border-t border-b border-color">
            <Ticker duration={25}>
                {Array.from({ length: 8 }).map((_, index: number) => {
                    return <Logo index={index} key={index} />;
                })}
            </Ticker>
        </div>
    );
}
