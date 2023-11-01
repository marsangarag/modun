import Image from "next/image";

export default function LacolinaHero() {
    return (
        <div className="relative w-screen h-full aspect-[2.86] my-col-10">
            <div className="absolute hidden md:block left-0 top-[5%]  h-full w-1/6">
                <Image
                    src={`/images/lacolina/grid.png`}
                    alt="colina-grid"
                    fill
                />
            </div>
            <div className="absolute hidden md:block right-0 rotate-180 top-[5%]  h-full w-1/6">
                <Image
                    src={`/images/lacolina/grid.png`}
                    alt="colina-grid"
                    fill
                />
            </div>
            {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 w-auto h-full aspect-[0.83]">
                <Image
                    src={"/images/lacolina/banner-left.png"}
                    alt="lacolina-banner-left"
                    fill
                />
            </div> */}
            <div className="absolute center w-1/3 h-auto aspect-[3.89]">
                <Image
                    src={`/images/lacolina/logo.png`}
                    alt="lacolina-logo"
                    fill
                />
            </div>
            {/* <div className="absolute right-0 top-1/2 -translate-y-1/2 w-auto h-full aspect-[0.83]">
                <Image
                    src={"/images/lacolina/banner-right.png"}
                    alt="lacolina-banner-right"
                    fill
                />
            </div> */}
        </div>
    );
}
