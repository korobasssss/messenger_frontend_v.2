import comments_scss from "@/app/scss/for_components/blog_pages/post/comments.module.scss";
import {OneCommentComponent} from "@/app/components/blog_pages/profile/posts/comment/OneCommentComponent";

export const CommentsComponent = () => {
    return (
        <ul className={comments_scss.comments}>
            <li>
                <OneCommentComponent/>
            </li>
            <li>
                <OneCommentComponent/>
            </li>
            <li>
                <OneCommentComponent/>
            </li>
            <li>
                <OneCommentComponent/>
            </li>
        </ul>
    )
}