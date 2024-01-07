import Image from "next/image";
import TitleAnimation from "../animations/title";

export default function Borolzoi() {
    return (
        <div className="my-col-10 md:gap-y-20 main-width">
            <TitleAnimation
                text="ХЭРЭГЖҮҮЛСЭН ТӨСЛҮҮД"
                className="font-extrabold text-big"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="font-bold text-sm">
                    <div>Бидний хэрэгжүүлсэн төслүүд:</div>
                    <div>·Хар чулуут (MV-021752)</div>
                    <div>·Баян (XV-018415)</div>
                    <div>·Ихэр майхан (XV-20370)</div>
                    <div>·Өлзийт (XV-020376)</div>
                    <div>·Тамгат (XV-018181)</div>
                    <div>·Мэргэн (XV-018305)</div>
                    <div>·Геологи хайгуул-өрөмдлөгийн баг</div>
                </div>
                <div className="relative w-full aspect-[2] h-auto">
                    <Image
                        src={"/images/business/borolzoi/0.png"}
                        alt="intro-bg"
                        fill
                    />
                </div>
                <div className="relative w-full aspect-[1.8] h-auto">
                    <Image
                        src={"/images/business/borolzoi/1.png"}
                        alt="intro-bg"
                        fill
                    />
                </div>
                <div className="relative w-full aspect-[1.8] h-auto">
                    <Image
                        src={"/images/business/borolzoi/2.png"}
                        alt="intro-bg"
                        fill
                    />
                </div>
            </div>
            <TitleAnimation
                text="МЭНДЧИЛГЭЭ"
                className="font-extrabold text-big"
            />
            <div className="my-col-10 md:flex-row gap-x-10 items-start">
                <div className="my-col-5 h-full w-full md:w-2/5 justify-between items-start">
                    <div className="relative w-full aspect-[0.8] h-auto">
                        <Image
                            src={"/images/business/borolzoi/person.png"}
                            alt="intro-bg"
                            fill
                        />
                    </div>
                    <div className="font-mont">
                        <div className="font-extralight">ЕРӨНХИЙ ГЕОЛОГИЧ</div>
                        <div className="font-bold">Ц. ЭНХБАТ</div>
                    </div>
                </div>
                <div className="text-justify text-sm md:text-base lg:text-big w-full md:w-3/5">
                    Миний бие Модун группын салбар компани болох Боролзой ХХК-д
                    2011 оноос эхлэн ерөнхий геологчоор ажиллаж байна. Энэ
                    хугацаанд Боролзой компани нь Дундговь, Говь-Алтай, Завхан,
                    Увс аймгуудын нутагт хайгуулын тусгай зөвшөөрлийн талбайнууд
                    авч, геологи-хайгуулын ажлыг амжилттай гүйцэтгэж ирлээ.
                    Дундговь аймагт бал чулууны ордыг нээн илрүүлж, хайгуулын
                    ажлыг амжилттай гүйцэтгэн, нөөцийг тогтоогоод, ашиглалтын
                    тусгай зөвшөөрлөө аваад байна. Мөн Говь-Алтай аймагт
                    зэс-алтны илрэлүүдийг тогтоож, хайгуулын ажлыг эхлүүллээ.
                    Модун группын хамт олондоо Модун ХХК-ийн 30 жилийн ойн
                    баярын мэнд хүргэж, бүгдээрээ эрүүл энх байж, цаашид улам
                    улам өөдлөх амжилт, бүтээн байгуулалтын төлөө хамтдаа
                    урагшлах ерөөл дэвшүүлье.
                </div>
            </div>
            <TitleAnimation
                text="ГЕОЛОГИ ХАЙГУУЛ, ӨРӨМДЛӨГИЙН БАГ"
                className="font-extrabold text-big"
            />
            <div className="relative w-full h-auto aspect-[3.33]">
                <Image
                    src={"/images/business/borolzoi/3.png"}
                    alt="intro-bg"
                    fill
                />
            </div>
            <div className="my-col-5 items-stretch md:flex-row gap-x-10">
                <div className="my-col-5 w-full md:w-1/2 justify-between">
                    <div className="relative text-justify border-l-0 md:border-l-2 border-blue md:pl-5">
                        Боролзой ХХК нь 2012 оноос өөрийн хайгуулын өрөмдлөгийн
                        багийг байгуулж ажилласан. 2012-2013 онд Atlas Copso
                        компанийн C-6 өрөмдлөгийн машинаар Харчулуутын бал
                        чулууны ордын хайгуулын ажлыг амжилттай гүйцэтгэсэн юм.
                    </div>
                    <div className="relative w-full h-auto aspect-[1.33]">
                        <Image
                            src={"/images/business/borolzoi/4.png"}
                            alt="intro-bg"
                            fill
                        />
                    </div>
                </div>
                <div className="w-full md:w-1/2 relative h-full aspect-[0.6]">
                    <Image
                        src={"/images/business/borolzoi/5.png"}
                        alt="intro-bg"
                        fill
                    />
                </div>
            </div>
        </div>
    );
}
