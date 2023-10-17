import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Header({ scrollPos }: { scrollPos: number }) {
    const router = useRouter();
    const { pathname } = router;
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
    const { t, i18n } = useTranslation("header");
    const navItems = [
        { route: "/", title: "about" },
        { route: "business", title: "business" },
        { route: "news", title: "news" },
        { route: "/hr", title: "hr" },
        { route: "/lacolina", title: "lacolina" },
    ];

    const onNavigate = (route: string) => {
        router.push(route);
    };

    const onChangeLanguage = () => {};

    return (
        <>
            <motion.header
                initial={{
                    background: "rgba(249, 249, 251, 0)",
                    height: "80px",
                }}
                animate={{
                    background:
                        scrollPos > 150
                            ? "rgba(249, 249, 251, 1)"
                            : "rgba(249, 249, 251, 0)",
                    height: scrollPos > 150 ? "100px" : "80px",
                }}
                className="fixed top-0 left-0 w-full z-50 px-10"
            >
                <div className="relative flex  justify-between gap-x-5 xl:gap-x-10 w-full h-full">
                    <motion.div
                        initial={{ paddingTop: 10 }}
                        animate={{ paddingTop: scrollPos > 150 ? 20 : 10 }}
                        className="cursor-pointer"
                        onClick={() => onNavigate("/")}
                        id="header-logo"
                    >
                        <Image
                            priority={true}
                            src={"/images/logo.png"}
                            alt="modun-logo"
                            width={150}
                            height={80}
                        />
                    </motion.div>
                    <div className="hamburger">
                        <label htmlFor="check">
                            <input
                                onChange={(e) =>
                                    setIsNavExpanded(e?.currentTarget?.checked)
                                }
                                type="checkbox"
                                id="check"
                            />
                            <span></span>
                            <span></span>
                            <span></span>
                        </label>
                    </div>
                    <div className="flex gap-x-5 xl:gap-x-10 items-center self-center text-center">
                        {navItems.map((nav) => {
                            return (
                                <div
                                    onClick={() => onNavigate(nav.route)}
                                    key={nav.title}
                                    className="nav-item group"
                                >
                                    <div>{t(`${nav.title}`).toUpperCase()}</div>
                                    <div className="group-hover:w-full w-0 transition-[width] h-0.5 bg-black rounded-sm absolute left-0 bottom-0"></div>
                                    {pathname === nav.route ? (
                                        <div className=" w-full transition-[width] h-0.5 bg-red-500 rounded-sm absolute left-0 bottom-0"></div>
                                    ) : null}
                                </div>
                            );
                        })}
                        <div
                            onClick={onChangeLanguage}
                            className="nav-item font-bold"
                        >
                            {i18n.language === "mn" ? "ENG" : "MN"}
                        </div>
                    </div>
                </div>
            </motion.header>
            <motion.div
                initial={{ height: 0, background: "rgba(249, 249, 251, 0)" }}
                animate={{
                    height: isNavExpanded ? "100vh" : 0,
                    background: isNavExpanded
                        ? "rgba(249, 249, 251, 1)"
                        : "rgba(249, 249, 251, 0)",
                }}
                transition={{ duration: 0.4 }}
                className="w-screen px-10 absolute pt-[100px] overflow-hidden inset-0 z-40 flex flex-col"
            >
                {navItems.map((nav) => {
                    return (
                        <div
                            onClick={() => onNavigate(nav.route)}
                            key={nav.route + nav.title}
                            className="border-t-2 border-gray py-7 text-center"
                        >
                            <div>{t(`${nav.title}`)}</div>
                        </div>
                    );
                })}
            </motion.div>
        </>
    );
}
