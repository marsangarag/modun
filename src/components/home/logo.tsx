import Image from "next/image";

export default function Logo({ index }: { index: number }) {
    return (
        <div className="relative h-auto cursor-pointer w-[248px] aspect-square">
            <Image
                src={`/images/logos/${index + 1}.png`}
                alt={`logo-${index + 1}`}
                fill
            />
        </div>
    );
}
