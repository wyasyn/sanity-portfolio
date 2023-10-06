import "./Footer.scss";
import { socials } from "@/constants/data";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer>
            <div className="container">
                <div className="footer-logo center">
                    <Image
                        src="/assets/logo-white-monkey.svg"
                        alt="logo"
                        width={40}
                        height={40}
                    />
                </div>
                <div className="socials">
                    <ul>
                        {socials.map((data) => (
                            <li key={data.name}>
                                <Link href={data.url}>{data.icon}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <p className="footer-text">
                    Yasin Walum {currentYear}. All Rights Reserved
                </p>
            </div>
        </footer>
    );
}
