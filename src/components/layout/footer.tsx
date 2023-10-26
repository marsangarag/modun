import { useThemeSwitcher } from "@/lib/helper";
import { useTranslation } from "next-i18next";
import Image from "next/image";
import { useRouter } from "next/router";
import { Facebook, Instagram, Twitter, Youtube } from "../icons";

export default function Footer() {
    const { t } = useTranslation("footer");
    const router = useRouter();
    const { pathname } = router;
    const { theme } = useThemeSwitcher();
    const icons = [
        {
            icon: <Instagram fill={theme === "dark"} />,
            route: "https://www.facebook.com/modungroup",
        },
        {
            icon: <Facebook fill={theme === "dark"} />,
            route: "https://www.facebook.com/modungroup",
        },
        {
            icon: <Youtube fill={theme === "dark"} />,
            route: "https://www.facebook.com/modungroup",
        },
        {
            icon: <Twitter fill={theme === "dark"} />,
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
        <footer className="py-10 mt-10 text-sm border-t border-color main-width my-col-10">
            <div className="my-col-5 sm:grid grid-cols-2 xl:grid-cols-4 gap-y-10 items-center">
                <div className="relative aspect-[2.61] w-[136px] h-auto">
                    <Image
                        priority={true}
                        src={
                            theme === "dark"
                                ? "/images/dark/logo.png"
                                : `/images/light/footer.png`
                        }
                        alt="footer-logo"
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
                {icons?.map((icon) => (
                    <div
                        onClick={() => onSocialMediaClick(icon.route)}
                        className="cursor-pointer bg-black dark:bg-white rounded-full p-2"
                        key={icon.route}
                    >
                        {icon.icon}
                    </div>
                ))}
            </div>

            {/* <div className="bg-blue text-center font-light text-sm py-2.5 md:py-5 lg:py-10">
                Модун групп 2023
            </div> */}
        </footer>
    );
}
