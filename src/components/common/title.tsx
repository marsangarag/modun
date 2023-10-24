import { useThemeSwitcher } from "@/lib/helper";
import Image from "next/image";

export default function PageTitle({
    title,
    subtitle,
}: {
    title: string;
    subtitle?: string;
}) {
    const { theme } = useThemeSwitcher();
    return (
        <div className="w-screen relative aspect-[2.66] h-auto">
            <div className="absolute opacity-50 left-0 top-1/2 -translate-y-1/2 h-full w-1/6 rotate-180">
                <Image src={`/icons/${theme}/grid.svg`} alt="grid" fill />
            </div>
            <div className="absolute opacity-50 right-0 top-1/2 -translate-y-1/2 h-full w-1/6 ">
                <Image src={`/icons/${theme}/grid.svg`} alt="grid" fill />
            </div>
            <div className="absolute center  w-full text-center my-col-5">
                <div className="font-black blue-text text-[28px] font-mont md:text-[48px] lg:text-[64px] xl:text-84">
                    {title?.toUpperCase()}
                </div>
                {subtitle ? (
                    <div className="text-xs lg:text-base">{subtitle}</div>
                ) : null}
            </div>
        </div>
    );
}
