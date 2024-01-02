import Image from "next/image";

export default function Tower() {
    return (
        <div className="main-width my-col-5 lg:gap-y-10">
            <div className="relative w-full aspect-[3.6]">
                <Image src={"/images/business/tower/0.png"} alt="0" fill />
            </div>
            <div className="my-col-5 md:flex-row">
                <div className="w-full md:w-3/5 relative aspect-[1.9]">
                    <Image src={"/images/business/tower/1.png"} alt="1" fill />
                </div>
                <div className="w-full md:w-2/5 relative aspect-[1.1]">
                    <Image src={"/images/business/tower/2.png"} alt="2" fill />
                </div>
            </div>
            <div className="relative w-full aspect-[2.4]">
                <Image src={"/images/business/tower/3.png"} alt="3" fill />
            </div>
            <div className="my-col-5 md:grid grid-cols-2 gap-5">
                <div className="w-full relative aspect-[1.3]">
                    <Image src={"/images/business/tower/4.png"} alt="4" fill />
                </div>
                <div className="w-full relative aspect-[1.3]">
                    <Image src={"/images/business/tower/5.png"} alt="5" fill />
                </div>
                <div className="w-full relative aspect-[1.3]">
                    <Image src={"/images/business/tower/6.png"} alt="6" fill />
                </div>
                <div className="w-full relative aspect-[1.3]">
                    <Image src={"/images/business/tower/7.png"} alt="7" fill />
                </div>
            </div>
        </div>
    );
}
1;
