import Image from "next/image";
import TitleAnimation from "../animations/title";

export default function Construction() {
    return (
        <div className="main-width my-col-5 lg:gap-y-10">
            <div className="my-col-5 md:flex-row gap-x-10">
                <div className="my-col-5 justify-between w-full md:w-3/5">
                    <div className="flex flex-col order-1 md:-order-1">
                        <div className="text-big font-bold">ЛАБОРАТОРИ</div>
                        <div className="relative text-justify text-big">
                            <div className="absolute hidden sm:block -left-5 top-2 bg-blue w-0.5 h-[calc(100%-12px)]"></div>
                            Тус үйлдвэрийн дэргэд нь бетоны маркыг бүрэн
                            тодорхойлох хүчин чадалтай иж бүрэн лаборатори
                            ажиллаж байна.
                        </div>
                    </div>
                    <div className="w-full relative aspect-[2.2]">
                        <Image
                            src={"/images/business/construction/0.png"}
                            alt="0"
                            fill
                        />
                    </div>
                </div>
                <div className="w-full md:w-2/5 relative aspect-[0.67]">
                    <Image
                        src={"/images/business/construction/1.png"}
                        alt="1"
                        fill
                    />
                </div>
            </div>
            <div className="w-full relative aspect-[2.8]">
                <Image
                    src={"/images/business/construction/2.png"}
                    alt="2"
                    fill
                />
            </div>
            <div className="my-col-5 md:flex-row gap-x-5">
                <div className="w-full relative md:w-1/2 aspect-[1.3]">
                    <Image
                        src={"/images/business/construction/3.png"}
                        alt="3"
                        fill
                    />
                </div>
                <div className="w-full relative md:w-1/2 aspect-[1.3]">
                    <Image
                        src={"/images/business/construction/4.png"}
                        alt="4"
                        fill
                    />
                </div>
            </div>
            <TitleAnimation
                text="ВИДЕО ТАНИЛЦУУЛГА"
                className="font-extrabold text-big"
            />
            <div className="w-2/3 relative aspect-[1.8] self-center">
                <Image
                    src={"/images/business/construction/6.png"}
                    alt="6"
                    fill
                />
            </div>
        </div>
    );
}
