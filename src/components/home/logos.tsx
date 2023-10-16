import Fade from "../animations/fade";
import Logo from "./logo";

export default function Logos() {
    return (
        <Fade
            direction="up"
            className="md:w-2/3 pt-20 grid grid-cols-4 mx-auto w-full px-5"
        >
            {Array.from({ length: 8 }).map((_: any, index: number) => {
                return <Logo key={index} index={index} />;
            })}
        </Fade>
    );
}
