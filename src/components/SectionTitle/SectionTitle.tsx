import { propTitle } from "../../../type";
import "./SectionTitle.scss";

export default function SectionTitle({ name, title }: propTitle) {
    return (
        <header className="section-title center">
            <p>{name}</p>
            <h2>{title}</h2>
        </header>
    );
}
