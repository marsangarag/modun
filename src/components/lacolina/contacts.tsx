import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import Image from "next/image";
import { Address, Call, FacebookGrad, Mail } from "../icons";

export default function Contacts() {
    const { t } = useTranslation("lacolina");
    return (
        <div className="my-col-10 main-width md:gap-y-20">
            <TitleAnimation lacolina text={t("contacts.title").toUpperCase()} />
            <div className="my-col-5 md:flex-row justify-between items-stretch border-0 md:border-[5px] colina-border">
                <div
                    className={`h-auto aspect-[2] relative w-full -my-[5px] -ml-[5px]`}
                >
                    <Image
                        src={`/images/lacolina/hr.png`}
                        alt={`contacts-image`}
                        fill
                        className={`object-cover`}
                    />
                    <div className="absolute w-full h-full inset-0 bg-white/[0.35]"></div>
                    <div className="absolute center text-colina text-center w-full">
                        <div className="lustria text-biggest">La Colina</div>
                        <div className="font-mont -mt-5 text-big">хотхон</div>
                    </div>
                </div>
                <div className="w-full font-mont my-col-5 md:my-col-10 items-start self-center text-sm p-5 md:p-10 colina-border md:border-0">
                    <a
                        href="tel:+976 99338802"
                        className="flex cursor-pointer gap-x-5 md:gap-x-10 items-center"
                    >
                        <div>
                            <Call />
                        </div>
                        <div>99338802, 88114682, 88884682, 80114682</div>
                    </a>
                    <a
                        href="mailto:sales@modungroup.mn"
                        className="flex cursor-pointer gap-x-5 md:gap-x-10 items-center"
                    >
                        <div>
                            <Mail />
                        </div>
                        <div>sales@modungroup.mn</div>
                    </a>
                    <a
                        href="https://www.facebook.com/modungroup"
                        target="_blank"
                        className="flex cursor-pointer gap-x-5 md:gap-x-10 items-center"
                    >
                        <div>
                            <FacebookGrad />
                        </div>
                        <div>{t("contacts.facebook")}</div>
                    </a>
                    <div className="flex gap-x-5 md:gap-x-10 items-center">
                        <div>
                            <Address />
                        </div>
                        <div> {t("contacts.address")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
