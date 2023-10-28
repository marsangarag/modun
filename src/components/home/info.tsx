import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";

export default function GroupInfo() {
    const { t } = useTranslation("home");
    const items = [
        { text: "30+", key: "experience" },
        { text: "10+", key: "branch" },
        { text: "200+", key: "work" },
    ];

    return (
        <>
            <div className="my-col-5 main-width font-mont items-center justify-between sm:flex-row gap-x-5 md:pt-10 place-items-start">
                {items.map((item, index) => {
                    return (
                        <Fade
                            key={item.key}
                            direction="right"
                            delay={(index + 1) * 0.1}
                            className="flex flex-col justify-start h-full text-center md:text-start"
                        >
                            <div className="text-blue font-black text-biggest ">
                                {item.text}
                            </div>
                            <div>{t(`intro.${item.key}`)}</div>
                        </Fade>
                    );
                })}
            </div>
        </>
    );
}
