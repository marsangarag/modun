import { routerStack } from "@/lib/helper/constants";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";

export default function Footer() {
    const { t } = useTranslation("footer");
    const router = useRouter();
    const { pathname } = router;
    const icons = [
        { icon: "fb", route: "https://github.com/vercel/next.js/issues/8279" },
        { icon: "ig", route: "" },
        { icon: "tw", route: "" },
        { icon: "ln", route: "" },
    ];

    const onSocialMediaClick = (route: string) => {
        window.open(route, "_blank");
    };

    const backToTop = () => {
        const container = document?.getElementById("scrollable-content");
        container?.scrollTo({ top: 0, behavior: "smooth" });
    };

    const nextPage = () => {
        const index = routerStack.indexOf(pathname);
        let nextItem = "/";
        if (index >= 0) {
            if (index < routerStack.length - 1) {
                nextItem = routerStack[index + 1];
            } else nextItem = "/";
        }
        router.push(nextItem);
    };

    return (
        <footer className="flex flex-col gap-y-10 pt-20 pb-5 px-5 md:px-10">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 place-items-start">
                <div className="flex flex-col">
                    <a href="mailto:info@modungroup.mn">info@modungroup.mn</a>
                    <a href="tel:+97611461146 ">+976 11461146</a>
                </div>
                <div className=" text-center">
                    <div>{t("address")}</div>
                </div>
                <div className="grid grid-cols-4 place-items-center w-full md:place-items-end gap-5 col-span-2 md:col-span-1">
                    {icons?.map((icon) => {
                        return (
                            <div
                                onClick={() => onSocialMediaClick(icon.route)}
                                key={icon.route + icon.icon}
                                className="grayscale hover:grayscale-0 cursor-pointer"
                            >
                                <Image
                                    src={`/icons/${icon.icon}.svg`}
                                    alt={`${icon}-icon`}
                                    width={48}
                                    height={48}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div className="flex justify-between">
                <div
                    className="cursor-pointer flex gap-x-2.5 items-center"
                    onClick={backToTop}
                >
                    <div>{t("top")}</div>
                    <Image
                        src={"/icons/arrow.svg"}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="rotate-45"
                    />
                </div>
                <div
                    className="cursor-pointer flex gap-x-2.5 items-center"
                    onClick={nextPage}
                >
                    <div>{t("next")}</div>
                    <Image
                        src={"/icons/arrow.svg"}
                        alt="arrow"
                        width={20}
                        height={20}
                        className="rotate-90"
                    />
                </div>
            </div>
        </footer>
    );
}
