import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Facebook, Instagram, Twitter, Youtube } from "../icons";
import { useState } from "react";

export default function Footer() {
    const { t } = useTranslation("footer");
    const router = useRouter();
    const { pathname } = router;
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

    const differentPhone = [
        {
            pathname: "/hr",
            phoneNo: "8811-4682",
        },
    ];

    const differentMail = [
        {
            pathname: "/hr",
            mail: "hr@modungroup.mn",
        },
        { pathname: "/la-colina", mail: "sales@modungroup.mn" },
    ];

    const phoneNo =
        differentPhone?.find((item) => item?.pathname === pathname)?.phoneNo ||
        "1146-1146";

    const email =
        differentMail.find((item) => item.pathname === pathname)?.mail ||
        "info@modungroup.mn";

    const onSocialMediaClick = (route: string) => {
        window.open(route, "_blank");
    };

    return (
        <footer className="py-10 mt-10 text-sm border-t-2 border-blue  main-width my-col-10">
            <div className="my-col-5 sm:grid grid-cols-2 xl:grid-cols-4 gap-y-10 items-center">
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
                <a href={`tel:+976 ${phoneNo}`} className="flex gap-x-2.5">
                    <Image
                        priority={true}
                        src={`/icons/${theme}/call.svg`}
                        alt="footer-phone"
                        width={24}
                        height={24}
                    />
                    <div>+976 {phoneNo}, 9909-7716</div>
                </a>
                <a href={`mailto:${email}`} className="flex gap-x-2.5 ">
                    <Image
                        priority={true}
                        src={`/icons/${theme}/mail.svg`}
                        alt="footer-mail"
                        width={24}
                        height={24}
                    />
                    <div>{email}</div>
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
                    <div className="break-keep">{t("address")}</div>
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
