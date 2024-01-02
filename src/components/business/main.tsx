import Image from "next/image";
import TitleAnimation from "../animations/title";

export default function MainBusiness() {
    return (
        <>
            <div className="my-col-10 md:gap-y-20 main-width">
                <TitleAnimation
                    text="МЭНДЧИЛГЭЭ"
                    className="font-extrabold text-big"
                />
                <div className="self-center relative w-full md:w-2/3 h-auto aspect-[1.73]">
                    <Image
                        src={"/images/lacolina/ceo.png"}
                        alt="intro-bg"
                        fill
                    />
                </div>
                <TitleAnimation
                    text="ГҮЙЦЭТГЭСЭН ТӨСЛҮҮДЭЭС"
                    className="font-extrabold text-big"
                />
                <div className="my-col-5 md:gap-y-10 xl:gap-y-0">
                    <div className="my-col-5 md:flex-row items-stretch md:items-center gap-x-10 xl:-mt-10">
                        <div className="relative w-full md:w-3/5 h-auto aspect-[1.5]">
                            <Image
                                src={"/images/business/modun/0.png"}
                                alt="0"
                                fill
                            />
                        </div>
                        <div className="my-col-5 gap-y-10 text-sm">
                            <div>
                                <div className="text-big">1998 ОН</div>
                                <div>
                                    <b>Объект:</b> “Исимусс” цогцолбор
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> 1998-2001 он
                                </div>
                                <div>
                                    <b>Байршил: </b>Баянзүрх дүүрэг, 15-р хороо,
                                    13-р хороолол
                                </div>
                            </div>
                            <div>
                                <div className="text-big">2002 ОН</div>
                                <div>
                                    <b>Объект:</b> 6 давхар орон сууцны барилга
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> 2002 он
                                </div>
                                <div>
                                    <b>Байршил: </b>Сүхбаатар дүүрэг, 15-р
                                    хороо, Чингисийн өргөн чөлөө
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-col-5 md:flex-row items-stretch md:items-center gap-x-10 xl:-mt-10">
                        <div className="relative -order-1 md:order-1 w-full md:w-3/5 h-auto aspect-[1.5]">
                            <Image
                                src={"/images/business/modun/1.png"}
                                alt="0"
                                fill
                            />
                        </div>
                        <div className="my-col-5 gap-y-10 text-sm">
                            <div>
                                <div className="text-big">2004 ОН</div>
                                <div>
                                    <b>Объект:</b> “Барилга мега стор“ төв
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> 2004-2007 он
                                </div>
                                <div>
                                    <b>Байршил: </b> Баянзүрх дүүрэг, 1-р хороо,
                                    Их тойруу
                                </div>
                            </div>
                            <div>
                                <div className="text-big">2007 ОН</div>
                                <div>
                                    <b>Объект:</b> Богдийн Өндөр орон сууцны
                                    барилга
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> 2007-2009 он
                                </div>
                                <div>
                                    <b>Байршил: </b>Хан-Уул дүүрэг, 1-р хороо,
                                    Зайсангийн гудамж
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-col-5 md:flex-row items-stretch md:items-center gap-x-10 xl:-mt-10">
                        <div className="relative w-full md:w-3/5 h-auto aspect-[1.5]">
                            <Image
                                src={"/images/business/modun/2.png"}
                                alt="0"
                                fill
                            />
                        </div>
                        <div className="my-col-5 gap-y-10 text-sm">
                            <div>
                                <div className="text-big">2011 ОН</div>
                                <div>
                                    <b>Объект:</b> Зайсан Цагаан Суварга
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> 2009-2011 он
                                </div>
                                <div>
                                    <b>Байршил: </b>Хан-Уул дүүрэг, 11-р хороо
                                </div>
                            </div>
                            <div>
                                <div className="text-big">2018 ОН</div>
                                <div>
                                    <b>Объект:</b> Монголианс ресторан 2-р
                                    салбар
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> 2018 он
                                </div>
                                <div>
                                    <b>Байршил: </b>Сүхбаатар дүүрэг, 1-р хороо,
                                    Шангрилла молл, 4-р давхар
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="my-col-5 md:flex-row items-stretch md:items-center gap-x-10 xl:-mt-10">
                        <div className="relative -order-1 md:order-1 w-full md:w-3/5 h-auto aspect-[1.5]">
                            <Image
                                src={"/images/business/modun/3.png"}
                                alt="0"
                                fill
                            />
                        </div>
                        <div className="my-col-5 gap-y-10 text-sm">
                            <div>
                                <div className="text-big">2021 ОН</div>
                                <div>
                                    <b>Объект:</b> Ла Колина Хотхон 30 айлын
                                    орон сууц
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> 2021 он
                                </div>
                                <div>
                                    <b>Байршил: </b>Хан Уул дүүрэг, 21-р хороо,
                                    Архивчдын гудамж
                                </div>
                            </div>
                            <div>
                                <div className="text-big">2023 ОН</div>
                                <div>
                                    <b>Объект:</b> Ла Колина Хотхон 64 айл, 2
                                    блок орон сууц
                                </div>
                                <div>
                                    <b>Хэрэгжүүлсэн хугацаа:</b> Одоо хэрэгжиж
                                    буй төсөл
                                </div>
                                <div>
                                    <b>Байршил: </b>Хан Уул дүүрэг, 21-р хороо,
                                    Архивчдын гудамж
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
