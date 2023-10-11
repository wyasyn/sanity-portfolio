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

export const TestimonialData = [
    {
        name: "AbdulRahim Magomu",
        photo: "/assets/profile2.jpg",
        title: "CEO RahStduio",
        comment:
            "He brought our vision to life with an incredible eye for design and attention to detail. Our website now looks and feels so much more engaging and user-friendly. We're thrilled with the results and highly recommend his services",
    },
    {
        name: "Cindy Newton",
        photo: "/assets/profile3.jpg",
        title: "Executive Director",
        comment:
            "His expertise in front-end development is evident in the seamless navigation and beautiful layout he created for our site. He was prompt, responsive, and took the time to understand our needs. We couldn't be happier with the outcome!",
    },
    {
        name: "Petr Wahigton",
        photo: "/assets/profile4.jpg",
        title: "Designer",
        comment:
            "Not only did he deliver a fantastic website, but they also made it responsive and optimized for all devices. Our website's performance has improved significantly, and we've received countless compliments from our users.",
    },
    {
        name: "Mark Drury",
        photo: "/assets/profile5.jpg",
        title: "Web Developer",
        comment:
            " He brought a fresh perspective to our project and exceeded our expectations in every way. We're already planning to collaborate with him again in the future.",
    },
    {
        name: "Martini Xhaka",
        photo: "/assets/profile6.jpg",
        title: "Accountant",
        comment:
            "We are incredibly satisfied with his work, and our website has received numerous compliments for its aesthetics and usability.",
    },
];
