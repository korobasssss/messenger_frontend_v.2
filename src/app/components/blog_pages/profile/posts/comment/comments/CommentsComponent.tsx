import comments_scss from "@/app/scss/for_components/blog_pages/post/comments.module.scss";
import {Comment, CommentsInterfaceComponent} from "@/app/interfaces/comments/commentsInterface";
import {useEffect} from "react";
import {OneCommentContainer} from "@/app/components/blog_pages/profile/posts/comment/oneComment/OneCommentContainer";

export const CommentsComponent = (props: CommentsInterfaceComponent) => {

    useEffect(() => {
        props.getComments('1')
    }, [props.comments])

    return (
        <ul className={comments_scss.comments}>
            {props.comments.map((oneComment : Comment) => {
                return (
                    <li key={oneComment.commentId}>
                        <OneCommentContainer oneComment={oneComment}/>
                    </li>
                )
            })}
        </ul>
    )
}