import "./style.scss";
import Link from "next/link";
import { BsArrowLeftCircle } from "react-icons/bs";
export default function StudioNavbar(props: any) {
    return (
        <>
            <nav className="studio-nav">
                <Link href="/" className="link">
                    <i className="back-btn">
                        <BsArrowLeftCircle />
                    </i>
                    <p>Back to website</p>
                </Link>
            </nav>
            {props.renderDefault(props)}
        </>
    );
}
