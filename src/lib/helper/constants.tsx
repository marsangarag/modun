import Borolzoi from "@/components/business/borolzoi";
import Construction from "@/components/business/construction";
import Gallery from "@/components/business/gallery";
import MainBusiness from "@/components/business/main";
import Mongolians from "@/components/business/mongolians";
import Tower from "@/components/business/tower";

export const routerStack = ["/", "/business", "/news", "/hr", "/lacolina"];

export const news = [
    { slug: "rich-experience", img: "0" },
    { slug: "anniversary", img: "1" },
];

export const businesses = [
    {
        slug: "modun",
        img: "modun",
        content: MainBusiness,
    },
    {
        slug: "borolzoi",
        img: "borolzoi",
        content: Borolzoi,
    },
    {
        slug: "mongolians",
        img: "mongolians",
        content: Mongolians,
    },
    {
        slug: "modun-construction",
        img: "construction",
        content: Construction,
    },
    {
        slug: "art-gallery",
        img: "gallery",
        content: Gallery,
    },

    {
        slug: "moden-tower",
        img: "tower",
        content: Tower,
    },

    // {
    //     slug: "lacolina",
    //     img: "lacolina",
    //     content: "",
    // },
];
