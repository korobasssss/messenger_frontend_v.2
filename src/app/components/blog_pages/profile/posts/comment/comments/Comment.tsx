import {CommentsComponent} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsComponent";
import {CommentsInterface} from "@/app/interfaces/comments/commentsInterface";
import {useEffect, useState} from "react";
import Cookies from "js-cookie";
import {Cookie_names} from "@/redux/messages/cookie_names";

export const Comments = (props: CommentsInterface) => {
    const [input_comment, setInput_comment] = useState('')

    const [isButtonClicked, setButtonClicked] = useState(false)
    const [isButtonSetCommentClicked, setButtonSetCommentClicked] = useState(false)

    useEffect(() => {
        props.getComments(Cookies.get(Cookie_names.ID_POST) as string)
    }, [])

    useEffect(() => {
        if (isButtonClicked) {
            setTimeout(() => {
                props.getComments(Cookies.get(Cookie_names.ID_POST) as string)
            }, 100)
        }
        setButtonClicked(false)
    }, [isButtonClicked])


    useEffect(() => {
        if (isButtonSetCommentClicked) {
            if (input_comment.length > 0) {
                props.setComment(props.postId, input_comment)
                setInput_comment('')
                setButtonClicked(true)
            }
        }
        setButtonSetCommentClicked(false)
    }, [isButtonSetCommentClicked]);


    return <CommentsComponent comments={props.comments}
                              setButtonSetCommentClicked={setButtonSetCommentClicked}
                              postId={props.postId}
                              setButtonClicked={setButtonClicked}
                              input_comment={input_comment}
                              setInput_comment={setInput_comment}/>
}