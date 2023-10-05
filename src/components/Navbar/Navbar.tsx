"use client";
import Link from "next/link";
import "./Navbar.scss";
import { Links } from "../../constants/data";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

function Navbar() {
    const [isVisible, setIsVisible] = useState(true);
    if (typeof window !== "undefined") {
        const [prevScrollY, setPrevScrollY] = useState(window.scrollY);

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(prevScrollY > currentScrollY);
            setPrevScrollY(currentScrollY);
        };

        useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
        }, [prevScrollY]);
    }
    const pathname = usePathname();
    return (
        <nav className={isVisible ? "main-nav" : "main-nav hidden"}>
            <ul className="nav-list">
                {Links.map((data, index) => {
                    const isActive = pathname === data.path;
                    return (
                        <li key={index}>
                            <Link
                                className={
                                    isActive ? "nav-links active" : "nav-links"
                                }
                                href={data.path}
                            >
                                <i>{data.icon}</i>
                                <p>{data.name}</p>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}

export default Navbar;
