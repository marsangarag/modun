import { useThemeSwitcher } from "@/lib/helper";

export default function Logo({ index }: { index: number }) {
    const { theme } = useThemeSwitcher();
    const onLogoClick = () => {
        console.log("a");
    };

    return (
        <div
            onClick={onLogoClick}
            className="relative aspect-square w-[200px] h-auto cursor-pointer mx-10"
        >
            <img
                className="absolute center object-cover"
                src={`/images/logos/${theme}/${index}.png`}
                alt={`logo-${index + 1}`}
            />
        </div>
    );
}
