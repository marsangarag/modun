import { useTranslation } from "next-i18next";
import Image from "next/image";

export default function LacolinaComponent() {
    const { t } = useTranslation("home");

    return (
        <div className="relative w-full h-full">
            <div className="hidden md:block absolute bottom-0 w-[36.12%] h-auto aspect-[1.1] left-0">
                <Image
                    src={"/images/lacolina/background.png"}
                    alt="lacolina-apartments"
                    fill
                />
            </div>
            <div className="my-col-5 md:grid grid-cols-3 main-width">
                <div className="my-col-5">
                    <div className="text-blue font-bold">
                        {t("lacolina.subtitle")}
                    </div>
                    <div className="text-huge font-extrabold">
                        {t("lacolina.title").toUpperCase()}
                    </div>
                </div>
                <div className="col-span-2 grid grid-cols-2 gap-5 lg:gap-10">
                    {Array.from({ length: 4 }).map((item, index: number) => {
                        return (
                            <div
                                key={index}
                                className="relative h-auto aspect-[0.91] w-auto"
                            >
                                <Image
                                    src={`/images/lacolina/${index + 1}.png`}
                                    alt={`lacolina-image-${index}`}
                                    fill
                                />
                                {index === 0 ? (
                                    <div className="absolute center flex flex-col gap-y-2.5 text-center w-full">
                                        <div className="text-big text-white font-bold">
                                            {t("lacolina.subtitle")}
                                        </div>
                                        <div className="text-sm text-white">
                                            {t("lacolina.title")}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}
