import Image from "next/image";

export default function Logo({ index }: { index: number }) {
    const onLogoClick = () => {
        console.log("sda");
    };

    return (
        <div
            onClick={onLogoClick}
            className="relative h-[50px] cursor-pointer w-[174px] aspect-square mx-10"
        >
            <Image
                src={`/images/logos/${index + 1}.png`}
                alt={`logo-${index + 1}`}
                fill
            />
        </div>
    );
}
