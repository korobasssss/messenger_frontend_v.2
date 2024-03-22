import comments_scss from "@/app/scss/for_components/blog_pages/post/comments.module.scss";
import {Comment, CommentsInterfaceComponent} from "@/app/interfaces/comments/commentsInterface";
import {OneCommentContainer} from "@/app/components/blog_pages/profile/posts/comment/oneComment/OneCommentContainer";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import Image from "next/image";
import sent_comment_icon from "@/assets/icons/post/sent_comment_icon.svg";

export const CommentsComponent = (props: CommentsInterfaceComponent) => {

    return (
        <section>
            <section className={one_post_scss.input_section}>
                <input value={props.input_comment}
                       onChange={(event) => props.setInput_comment(event.target.value)}
                       className={one_post_scss.input} placeholder={'Написать комментарий'}/>
                <button className={'button_3rd_plane'}
                onClick={() => props.setButtonSetCommentClicked(true)}>
                    <Image src={sent_comment_icon} alt={'send comment'}/>
                </button>
            </section>
            <ul className={comments_scss.comments}>
                {props.comments.length !== 0 ?
                    props.comments.map((oneComment: Comment) => {
                        return (
                            <li key={oneComment.commentId}>
                                <OneCommentContainer oneComment={oneComment}
                                                     setButtonClicked={props.setButtonClicked}/>
                            </li>
                        )
                    }).reverse()
                    :
                        <p className={one_post_scss.no_comments}>
                            Нет комментариев...
                        </p>
                }
            </ul>
        </section>
    )
}