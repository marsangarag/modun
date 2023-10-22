import { useTranslation } from "next-i18next";
import Fade from "../animations/fade";
import { businesses } from "@/lib/helper/constants";
import BusinessCard from "./business-card";

export default function Businesses({ less }: { less?: string }) {
    const { t } = useTranslation("business");

    return (
        <div className="main-width my-col-10 md:gap-y-14">
            <Fade direction="up" className="my-col-5">
                <div className="text-blue font-bold">{t("title")}</div>
                <div className="text-base md:text-huge font-extrabold">
                    {t("description").toUpperCase()}
                </div>
            </Fade>
            <div className="my-col-20 md:flex-row justify-between flex-wrap">
                {less
                    ? businesses
                          .filter((item) => item?.img !== less)
                          .slice(0, 4)
                          .map((business, index: number) => {
                              return (
                                  <BusinessCard
                                      key={business.slug}
                                      index={index}
                                      data={business}
                                  />
                              );
                          })
                    : businesses.map((business, index: number) => {
                          return (
                              <BusinessCard
                                  key={business.slug}
                                  index={index}
                                  data={business}
                              />
                          );
                      })}
            </div>
        </div>
    );
}
