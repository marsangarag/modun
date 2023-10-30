import { useTranslation } from "next-i18next";
import TitleAnimation from "../animations/title";
import Image from "next/image";
import { AddressBlue, CallRed, FacebookBlue, MailRed } from "../icons";

export default function Contacts() {
    const { t } = useTranslation("lacolina");
    return (
        <div className="my-col-10 md:gap-y-20">
            <TitleAnimation lacolina text={t("contacts.title").toUpperCase()} />
            <div className="my-col-5 md:flex-row justify-between items-stretch border-0 md:border-[5px] colina-border">
                <div
                    className={`h-auto aspect-[1.77] relative w-full -my-[5px] -ml-[5px]`}
                >
                    <Image
                        src={`/images/lacolina/hr.png`}
                        alt={`contacts-image`}
                        fill
                        className={`object-cover`}
                    />
                </div>
                <div className="w-full font-mont my-col-5 md:my-col-10 items-start self-center text-sm p-5 md:p-10 colina-border md:border-0">
                    <a
                        href="tel:+976 99338802"
                        className="flex cursor-pointer gap-x-5 md:gap-x-10 items-center"
                    >
                        <div>
                            <CallRed />
                        </div>
                        <div>99338802, 88114682, 88884682, 80114682</div>
                    </a>
                    <a
                        href="mailto:sales@modungroup.mn"
                        className="flex cursor-pointer gap-x-5 md:gap-x-10 items-center"
                    >
                        <div>
                            <MailRed />
                        </div>
                        <div>sales@modungroup.mn</div>
                    </a>
                    <a
                        href="https://www.facebook.com/modungroup"
                        target="_blank"
                        className="flex cursor-pointer gap-x-5 md:gap-x-10 items-center"
                    >
                        <div>
                            <FacebookBlue />
                        </div>
                        <div>{t("contacts.facebook")}</div>
                    </a>
                    <div className="flex gap-x-5 md:gap-x-10 items-center">
                        <div>
                            <AddressBlue />
                        </div>
                        <div> {t("contacts.address")}</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
