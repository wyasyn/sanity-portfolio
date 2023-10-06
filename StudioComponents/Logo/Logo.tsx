import Image from "next/image";
import "./style.scss";
export default function Logo(props: any) {
    const { renderDefault, title } = props;
    return (
        <div className="logo">
            <Image
                src="/assets/blogMe.jpg"
                alt="my pic"
                width={50}
                height={50}
            />
        </div>
    );
}
