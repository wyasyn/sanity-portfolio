import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { FaAward, FaBriefcase } from "react-icons/fa";
import {
    BiLogoGithub,
    BiLogoGmail,
    BiLogoLinkedinSquare,
    BiLogoTwitter,
    BiLogoWhatsapp,
    BiSupport,
} from "react-icons/bi";

const myEmail = process.env.MY_EMAIL;
const myPhone = process.env.MY_PHONE;

export const Links = [
    {
        path: "/",
        name: "Home",
        icon: <HiOutlineHome />,
    },
    {
        path: "/about",
        name: "About",
        icon: <AiOutlineUser />,
    },
    {
        path: "/projects",
        name: "Projects",
        icon: <BsGear />,
    },
    {
        path: "/contact",
        name: "Contact",
        icon: <FiMail />,
    },
];

export const Intro = {
    describe:
        "Am on a Journey to innovate and create. Explore my world of code, design, and technology as I turn ideas into reality.",
};

export const socials = [
    {
        name: "GitHib",
        icon: <BiLogoGithub />,
        url: "https://github.com/wyasyn",
    },
    {
        name: "Gmail",
        icon: <BiLogoGmail />,
        url: `mailto:${myEmail}`,
    },
    {
        name: "Twitter",
        icon: <BiLogoTwitter />,
        url: "https://twitter.com/wyasyn",
    },
    {
        name: "WhatsApp",
        icon: <BiLogoWhatsapp />,
        url: `https://wa.me/${myPhone}`,
    },
    {
        name: "LinkinedIn",
        icon: <BiLogoLinkedinSquare />,
        url: "https://www.linkedin.com/in/yasin-walum-01b18295/",
    },
];

export const bannerData = [
    {
        name: "Experience",
        describe: "5 Years",
        icon: <FaAward />,
    },
    {
        name: "Completed",
        describe: "200+ Projects",
        icon: <FaBriefcase />,
    },
    {
        name: "Support",
        describe: "Online 24/7",
        icon: <BiSupport />,
    },
];

export const servicesData = [
    {
        name: "web development",
        describe:
            " Design and code websites, ensuring functionality, usability, and a visually appealing user experience for online visitors.",
        about: "About Development",
    },
    {
        name: "data analysis",
        describe:
            "Interpret data to extract insights and inform decision-making, using statistical and analytical techniques.",
        about: "About Analysis",
    },
    {
        name: "content & seo",
        describe:
            "Optimize websites to improve their visibility and ranking on search engines, driving organic traffic and enhancing online presence.",
        about: "About SEO",
    },
];
