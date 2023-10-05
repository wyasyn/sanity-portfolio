import { FaHome, FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsGear } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
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
