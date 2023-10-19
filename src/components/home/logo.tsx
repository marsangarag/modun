import Image from "next/image";

export default function Logo({ index }: { index: number }) {
    return (
        <div className="relative h-auto cursor-pointer w-[248px] aspect-square overflow-hidden">
            <div className="absolute w-full h-full inset-0 transition-transform duration-300">
                <Image
                    src={`/images/logos/${index + 1}.png`}
                    alt={`logo-${index}`}
                    fill
                />
            </div>
        </div>
        // <div className="relative w-full h-full border border-black/40 hover:border-black -ml-[1px] -mb-[1px] aspect-square md:grayscale active:grayscale-0 transition-all duration-300 hover:grayscale-0">
        // </div>
    );
}
