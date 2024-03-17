import {CommentsComponent} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsComponent";
import {CommentsInterface, CommentsInterfaceComponent} from "@/app/interfaces/comments/commentsInterface";
import {useEffect} from "react";

export const Comments = (props: CommentsInterface) => {

    useEffect(() => {
        props.getComments('1')
    }, [props.comments])

    const setComment = (postId: string, input_comment: string) => {
        if (input_comment.length > 0) {
            props.setComment(postId, input_comment)
        }
    }

    return <CommentsComponent comments={props.comments}
                              setComment={setComment}
                              postId={props.postId}/>
}