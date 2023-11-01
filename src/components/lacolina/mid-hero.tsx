import { useThemeSwitcher } from "@/lib/helper";
import Image from "next/image";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

export default function ColinaMidHero() {
    const { theme } = useThemeSwitcher();
    return (
        <div className="relative my-col-10 py-20">
            <Image
                src={`/images/logos/${theme}/${
                    theme === "light" ? "colina" : "4"
                }.png`}
                alt="colina-logo"
                width={200}
                height={195}
                className="self-center"
            />

            <div className="relative h-full w-full md:mt-20 mt-0 cursor-grab">
                <Slide
                    cssClass="relative"
                    duration={5000}
                    transitionDuration={500}
                    easing="ease"
                    arrows={false}
                >
                    {Array.from({ length: 9 }).map((_, index) => (
                        <div
                            key={index}
                            className="w-screen h-full aspect-[2]"
                            style={{
                                height: "100%",
                                backgroundImage: `url(/images/lacolina/banners/${index}.png)`,
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundAttachment: "fixed",
                                backgroundRepeat: "no-repeat",
                            }}
                        ></div>
                    ))}
                </Slide>
            </div>
        </div>
    );
}
