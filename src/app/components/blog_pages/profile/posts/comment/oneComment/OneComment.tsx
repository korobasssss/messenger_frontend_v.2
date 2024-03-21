import {useEffect, useState} from "react";
import '@/app/scss/global/globals.scss'
import {OneCommentComponent} from "@/app/components/blog_pages/profile/posts/comment/oneComment/OneCommentComponent";
import {OneCommentInterface} from "@/app/interfaces/comments/commentsInterface";

export const OneComment = (props: OneCommentInterface) => {
    const [isButtonLikeCommentClicked, setButtonLikeCommentClicked] = useState(false)
    const [isButtonDeleteCommentClicked, setButtonDeleteCommentClicked] = useState(false)


    useEffect(() => {
        if (isButtonDeleteCommentClicked) {
            props.deleteComment(props.oneComment.commentId)
            props.setButtonClicked(true)

        }
        setButtonDeleteCommentClicked(false)
    }, [isButtonDeleteCommentClicked]);

    useEffect(() => {
        if (isButtonLikeCommentClicked) {
            props.likeComment(props.oneComment.commentId)
            props.setButtonClicked(true)
        }
        setButtonLikeCommentClicked(false)
    }, [isButtonLikeCommentClicked]);


    return <OneCommentComponent oneComment={props.oneComment}
                                setButtonClicked={props.setButtonClicked}
                                setButtonDeleteCommentClicked={setButtonDeleteCommentClicked}
                                setButtonLikeCommentClicked={setButtonLikeCommentClicked}/>
}