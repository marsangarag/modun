import Image from "next/image";
import TitleAnimation from "../animations/title";

export default function Gallery() {
    return (
        <div className="main-width my-col-5 gap-y-10">
            <div className="my-col-5 md:gap-y-10">
                <div className="my-col-5 md:flex-row gap-x-5">
                    <div className="my-col-5 w-full md:w-1/2">
                        <TitleAnimation
                            text="МУЗЕЙ ҮҮСГЭН БАЙГУУЛАГДСАН ТҮҮХ"
                            className="font-extrabold"
                        />
                        <div className="text-justify text-sm">
                            Монголын урлагийн музейг үүсгэн байгуулагч Д.Батбаяр
                            миний бие олон жилийн хүч хөдөлмөр, эрэл хайгуулын
                            үр дүнд цуглуулсан монгол орны түүхэн өв соёлын
                            дурсгал, ховор нандин урлагийн бүтээл, үзмэрүүдээс
                            бүрдсэн цуглуулгаа энэхүү музейдээ дэглэн дэлгэж Та
                            бүхэндээ толилуулж байна.
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[1.5]">
                        <Image
                            src={"/images/business/gallery/0.png"}
                            alt="0"
                            fill
                        />
                    </div>
                </div>
                <div className="my-col-5 md:flex-row items-center gap-x-5">
                    <div className="my-col-5 w-full md:w-1/2">
                        <div className="text-justify text-sm">
                            Хүүхэд байхдаа саваагүйтэж цуглуулдаг байсан чихрийн
                            цаасны цуглуулга маань номоор өргөжиж, улмаар эртний
                            эдлэл рүү орсон доо. Эхний үедээ хүмүүсийн санал
                            болгож барьж ирсэн зүйлийг шилж сонгоод авдаг байсан
                            бол яваандаа ийм сурвалжтай, ийм зүйл тэнд байдаг
                            гэсэн сургаар эрж хайж авдаг болсон.
                        </div>
                    </div>
                    <div className="w-full order-1 md:-order-1 md:w-1/2 relative aspect-[1.6]">
                        <Image
                            src={"/images/business/gallery/1.png"}
                            alt="1"
                            fill
                        />
                    </div>
                </div>
                <div className="my-col-5 md:flex-row items-center gap-x-5">
                    <div className="my-col-5 w-full md:w-1/2">
                        <div className="text-justify text-sm">
                            Улам бүр устаж үгүй болсоор байгаа монголын маань
                            түүхийн ховор нандин дурсгал бидний монголчуудыг
                            бусад үндэстнүүдээс өөр гэдгийг дэлхийд таниулах
                            урлагийн бүтээлүүдээс өчүүхэн хэсгийг ч болов үр
                            хойчдоо өвлүүлэн үлдээж, таниулъя гэсэн бодол тээж л
                            яваа маань энэ дээ.
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 relative aspect-[2]">
                        <Image
                            src={"/images/business/gallery/2.png"}
                            alt="2"
                            fill
                        />
                    </div>
                </div>
            </div>
            <TitleAnimation text="ФОТО АГШИН" className="font-extrabold" />
            <div className="my-col-5 md:flex-row gap-x-5">
                <div className="w-full relative md:w-1/2 aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/3.png"}
                        alt="3"
                        fill
                    />
                </div>
                <div className="w-full relative md:w-1/2 aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/4.png"}
                        alt="4"
                        fill
                    />
                </div>
            </div>
            <div className="w-full relative aspect-[1.5]">
                <Image src={"/images/business/gallery/5.png"} alt="5" fill />
            </div>
            <div className="my-col-5 md:grid grid-cols-2 gap-5">
                <div className="w-full relative aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/6.png"}
                        alt="6"
                        fill
                    />
                </div>
                <div className="w-full relative  aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/7.png"}
                        alt="7"
                        fill
                    />
                </div>
                <div className="w-full relative  aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/8.png"}
                        alt="8"
                        fill
                    />
                </div>
                <div className="w-full relative  aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/9.png"}
                        alt="9"
                        fill
                    />
                </div>
                <div className="w-full relative  aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/10.png"}
                        alt="10"
                        fill
                    />
                </div>
                <div className="w-full relative  aspect-[1.5]">
                    <Image
                        src={"/images/business/gallery/11.png"}
                        alt="11"
                        fill
                    />
                </div>
            </div>
        </div>
    );
}
