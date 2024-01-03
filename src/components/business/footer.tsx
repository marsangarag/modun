import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Facebook, Instagram, Twitter, Youtube } from "../icons";
import { useEffect, useState } from "react";

export default function BusinessFooter({ slug }: { slug: string }) {
    const { t } = useTranslation("footer");
    const { theme } = useThemeSwitcher();
    const [hoveredIcon, setHoveredIcon] = useState<number | null>(null);
    const [logoHover, setLogoHover] = useState<boolean | null>(false);

    const icons = [
        {
            icon: Instagram,
            route: "https://www.facebook.com/modungroup",
        },
        {
            icon: Facebook,
            route: "https://www.facebook.com/modungroup",
        },
        {
            icon: Youtube,
            route: "https://www.facebook.com/modungroup",
        },
        {
            icon: Twitter,
            route: "https://www.facebook.com/modungroup",
        },
    ];

    const getInfo = () => {
        switch (slug) {
            case "mongolians":
                return {
                    phoneNo: "7010-4682, 9999-4682",
                    address:
                        "Сүхбаатар дүүрэг, Олимпын гудамж, Shangri-La Mall, 4 давхар",
                    text: "ХОЛБОО БАРИХ",
                };
            case "tower":
                return {
                    phoneNo: "9191-7716, 8811-4682",
                    address:
                        "Баянзүрх дүүрэг, 1-р хороо, Их Тойруу гудамж, Барилга Мега Стор төв",
                    text: "ҮЙЛЧИЛГЭЭНИЙ ТАЛБАЙ ТҮРЭЭСЛЭХ, ХУДАЛДАХ АЛБА",
                };
            default:
                return {
                    phoneNo: "1146-1146, 9909-7716",
                    address:
                        "Улаанбаатар хот, Хан-Уул дүүрэг, 21-р хороо, Архивчдын гудамж, Ла Колина 447, 1 давхар",
                    text: null,
                };
        }
    };

    const onSocialMediaClick = (route: string) => {
        window.open(route, "_blank");
    };

    return (
        <footer className="py-10 mt-20 text-sm border-t-2 font-mont border-blue relative  main-width my-col-10">
            <div className="absolute left-0 -top-6 font-bold">
                {getInfo()?.text}
            </div>
            <div
                className={`my-col-5 sm:grid grid-cols-2 ${
                    getInfo().text ? "xl:grid-cols-3" : "xl:grid-cols-4"
                }  gap-y-10 items-center`}
            >
                {getInfo()?.text ? null : (
                    <div
                        onMouseOver={() => setLogoHover(true)}
                        onMouseLeave={() => setLogoHover(false)}
                        className="relative cursor-pointer aspect-[2.61] w-[136px] h-auto"
                    >
                        <Image
                            priority={true}
                            src={
                                logoHover
                                    ? "/images/light/logo.png"
                                    : theme === "dark"
                                    ? "/images/dark/logo.png"
                                    : `/images/light/footer.png`
                            }
                            alt="footer-logo"
                            className="group"
                            fill
                        />
                    </div>
                )}

                <a
                    href={`tel:+976 ${getInfo().phoneNo.split(", ")[0]}`}
                    className="flex gap-x-2.5"
                >
                    <Image
                        priority={true}
                        src={`/icons/${theme}/call.svg`}
                        alt="footer-phone"
                        width={24}
                        height={24}
                    />
                    +976 {getInfo().phoneNo}
                </a>
                <a
                    href={`mailto:info@modungroup.mn`}
                    className="flex gap-x-2.5 "
                >
                    <Image
                        priority={true}
                        src={`/icons/${theme}/mail.svg`}
                        alt="footer-mail"
                        width={24}
                        height={24}
                    />
                    <div>info@modungroup.mn</div>
                </a>
                <div className="flex gap-x-2.5 items-center">
                    <div className="flex-shrink-0">
                        <Image
                            priority={true}
                            src={`/icons/${theme}/pin.svg`}
                            alt="footer-pin"
                            width={24}
                            height={24}
                        />
                    </div>
                    <div className="break-keep">{getInfo().address}</div>
                </div>
            </div>

            <div className="flex items-center mx-auto text-center gap-x-5">
                {icons?.map((icon, index) => (
                    <div
                        onMouseOver={() => setHoveredIcon(index)}
                        onMouseLeave={() => setHoveredIcon(null)}
                        onClick={() => onSocialMediaClick(icon.route)}
                        className="cursor-pointer hover:bg-black dark:hover:bg-white group rounded-full p-2"
                        key={icon.route + index}
                    >
                        <icon.icon
                            fill={
                                (index !== hoveredIcon && theme === "light") ||
                                (theme === "dark" && index === hoveredIcon)
                            }
                        />
                    </div>
                ))}
            </div>
        </footer>
    );
}
