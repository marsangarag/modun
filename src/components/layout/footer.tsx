import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import {
    Call,
    Facebook,
    Instagram,
    Mail,
    Pin,
    Twitter,
    Youtube,
} from "../icons";

export default function Footer() {
    const { t } = useTranslation("footer");
    const router = useRouter();
    const { pathname } = router;
    const { theme } = useThemeSwitcher();
    const icons = [
        {
            icon: <Instagram fill={theme === "dark"} />,
            route: "https://github.com/vercel/next.js/issues/8279",
        },
        {
            icon: <Facebook fill={theme === "dark"} />,
            route: "https://github.com/vercel/next.js/issues/8279",
        },
        {
            icon: <Youtube fill={theme === "dark"} />,
            route: "https://github.com/vercel/next.js/issues/8279",
        },
        {
            icon: <Twitter fill={theme === "dark"} />,
            route: "https://github.com/vercel/next.js/issues/8279",
        },
    ];

    const onSocialMediaClick = (route: string) => {
        window.open(route, "_blank");
    };

    return (
        <footer className="text-white">
            <div className="bg-[#1C1C1C]  pt-10 md:pt-20 lg:pt-32 pb-14 md:pb-24 lg:pb-36 text-sm">
                <div className="main-width justify-between my-col-10 md:flex-row ">
                    <div className="justify-between my-col-10 w-full md:w-auto">
                        <div className="flex md:flex-col md:gap-y-5 justify-between w-full">
                            <div className="relative aspect-[2.61] w-[136px] h-auto">
                                <Image
                                    priority={true}
                                    src={`/images/${theme}/logo.png`}
                                    alt="modun-logo"
                                    fill
                                />
                            </div>
                            <div className="flex flex-col">
                                <div>{t("slogan.firstline")}</div>
                                <div>{t("slogan.secondline")}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-4 place-items-center md:place-items-start gap-x-5">
                            {icons?.map((icon) => (
                                <div
                                    onClick={() =>
                                        onSocialMediaClick(icon.route)
                                    }
                                    className="cursor-pointer"
                                    key={icon.route}
                                >
                                    {icon.icon}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="my-col-5 md:gap-y-10 items-start">
                        <div className="font-bold text-base">
                            {t("contact")}
                        </div>
                        <div className="my-col-5 text-sm">
                            <a
                                href="tel:+976 1146-1146"
                                className="flex gap-x-2.5"
                            >
                                <Call />
                                <div>+976 1146-1146, 9909-7716</div>
                            </a>
                            <a
                                href="mailto:info@modungroup.com"
                                className="flex gap-x-2.5 "
                            >
                                <Mail />
                                <div>info@modungroup.com</div>
                            </a>
                            <div className="flex gap-x-2.5 items-center">
                                <div>
                                    <Pin />
                                </div>
                                <div className="hidden md:block">
                                    <div>{t("address.firstline")}</div>
                                    <div>{t("address.secondline")}</div>
                                </div>
                                <div className="md:hidden ">
                                    {t("address.firstline") +
                                        t("address.secondline")}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-blue text-center font-light text-sm py-2.5 md:py-5 lg:py-10">
                Модун групп 2023
            </div>
        </footer>
    );
}
