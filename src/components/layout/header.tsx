import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";

export default function Header({ scrollPos }: { scrollPos: number }) {
    const router = useRouter();
    const { pathname } = router;
    const [isNavExpanded, setIsNavExpanded] = useState<boolean>(false);
    const { t } = useTranslation("header");
    const headerTitles: any = { "/": { rows: 2, key: "home" } };
    const location = headerTitles[pathname];
    const leftNav = [
        { route: "/", title: "about" },
        { route: "business", title: "business" },
        { route: "news", title: "news" },
    ];
    const rightNav = [
        { route: "/hr", title: "hr" },
        { route: "/lacolina", title: "lacolina" },
    ];
    const onNavigate = (route: string) => {
        router.push(route);
    };

    return (
        <>
            <motion.header
                initial={{
                    background: "rgba(249, 249, 251, 0)",
                    height: "100px",
                }}
                animate={{
                    background:
                        scrollPos > 150
                            ? "rgba(249, 249, 251, 1)"
                            : "rgba(249, 249, 251, 0)",
                    height: scrollPos > 150 ? "120px" : "100px",
                }}
                className="fixed top-0 left-0 h-[100px] w-full z-50 px-10"
            >
                <div className="relative flex justify-between gap-x-5 xl:gap-x-10 items-center w-full h-full">
                    <div className="flex w-full col-span-2 gap-x-7 xl:gap-x-10 items-center text-center">
                        {leftNav.map((left) => {
                            return (
                                <div
                                    onClick={() => onNavigate(left.route)}
                                    key={left.title}
                                    className="nav-item group"
                                >
                                    <div>{t(`${left.title}`)}</div>
                                    <div className="group-hover:w-full w-0 transition-[width] h-0.5 bg-black rounded-sm absolute left-0 bottom-0"></div>
                                    {pathname === left.route ? (
                                        <div className=" w-full transition-[width] h-0.5 bg-red-500 rounded-sm absolute left-0 bottom-0"></div>
                                    ) : null}
                                </div>
                            );
                        })}
                    </div>
                    <div
                        onClick={() => onNavigate("/")}
                        className="flex  items-end gap-x-5 w-full justify-center"
                        id="header-logo"
                    >
                        <div className="cursor-pointer">
                            <Image
                                priority={true}
                                src={"/images/logo.png"}
                                alt="modun-logo"
                                width={150}
                                height={150}
                            />
                        </div>
                        <div className="flex flex-col gap-y-1 text-xs">
                            {Array.from({ length: location?.rows }).map(
                                (_: any, index: number) => (
                                    <div key={index}>
                                        {t(`${location?.key}.${index}`)}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
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
                    <div className="flex w-full col-span-2 gap-x-7 xl:gap-x-10 items-center justify-end text-center">
                        {rightNav.map((right) => {
                            return (
                                <div
                                    onClick={() => onNavigate(right.route)}
                                    key={right.title}
                                    className="nav-item group"
                                >
                                    <div>{t(`${right.title}`)}</div>
                                    <div className="group-hover:w-full w-0 transition-[width] h-0.5 bg-black rounded-sm absolute left-0 bottom-0"></div>
                                </div>
                            );
                        })}
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
                className="w-screen  px-10 absolute pt-[100px] overflow-hidden bg-main inset-0 z-40"
            >
                <div className="flex flex-col">
                    {leftNav.map((left) => {
                        return (
                            <div
                                onClick={() => onNavigate(left.route)}
                                key={left.route + left.title}
                                className="border-t-2 border-gray py-7 text-center"
                            >
                                <div>{t(`${left.title}`)}</div>
                            </div>
                        );
                    })}
                    {rightNav.map((right) => {
                        return (
                            <div
                                onClick={() => onNavigate(right.route)}
                                key={right.route + right.title}
                                className="border-t-2 border-gray py-7 text-center"
                            >
                                <div>{t(`${right.title}`)}</div>
                            </div>
                        );
                    })}
                </div>
            </motion.div>
        </>
    );
}
