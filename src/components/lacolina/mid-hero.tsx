import { useThemeSwitcher } from "@/lib/helper";
import Image from "next/image";

export default function ColinaMidHero() {
    const { theme } = useThemeSwitcher();
    return (
        <div className="relative my-col-10 py-20">
            <Image
                src={`/images/logos/${theme}/${
                    theme === "light" ? "colina" : "4"
                }.png`}
                alt="colina-logo"
                width={353}
                height={195}
                className="self-center"
            />
            {/* <div className="absolute hidden md:block left-0 top-[5%]  aspect-[1.6] h-[315px] w-auto">
                <Image
                    src={`/images/lacolina/grid.png`}
                    alt="colina-grid"
                    fill
                />
            </div>
            <div className="absolute hidden md:block right-0 rotate-180 top-[5%] aspect-[1.6] h-[315px] w-auto">
                <Image
                    src={`/images/lacolina/grid.png`}
                    alt="colina-grid"
                    fill
                />
            </div> */}
            <div className="w-screen h-auto aspect-video relative">
                <Image
                    src={`/images/lacolina/banner-2.png`}
                    alt="colina-banner-2"
                    fill
                />
            </div>
        </div>
    );
}
