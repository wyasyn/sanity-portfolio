import { Post, SectionTitle } from "..";
import "./PostContainer.scss";

export default function PostContainer() {
    return (
        <div className="post-container">
            <section className="container">
                <SectionTitle name="Blog" title="Insights & Ideas" />
                <div className="wrapper">
                    <Post />
                </div>
            </section>
        </div>
    );
}
