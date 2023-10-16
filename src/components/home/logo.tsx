import Image from "next/image";

export default function Logo({ index }: { index: number }) {
    return (
        <div className="relative w-full h-full border border-black/40 hover:border-black -ml-[1px] -mb-[1px] aspect-square md:grayscale active:grayscale-0 transition-all duration-300 hover:grayscale-0">
            <Image
                src={`/images/logos/${index + 1}.png`}
                alt={`logo-${index}`}
                fill
            />
        </div>
    );
}
