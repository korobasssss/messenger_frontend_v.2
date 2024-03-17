import Image from "next/image";
import default_avatar from '@/assets/common/default_avatar.svg'

import edit_icon from '@/assets/icons/post/edit_icon.svg'
import {useState} from "react";
import one_post_scss from "@/app/scss/for_components/blog_pages/post/one_post.module.scss";
import not_like_icon from "@/assets/icons/post/not_like_icon.svg";
import {EditComponent} from "@/app/components/blog_pages/profile/posts/comment/edit/EditComponent";
import one_comment_scss from "@/app/scss/for_components/blog_pages/post/one_comment.module.scss";
import '@/app/scss/global/globals.scss'
import {OneCommentComponent} from "@/app/components/blog_pages/profile/posts/comment/oneComment/OneCommentComponent";
import {OneCommentInterface} from "@/app/interfaces/comments/commentsInterface";

export const OneComment = (props: OneCommentInterface) => {

    const likeComment = (commentId: string) => {
        props.likeComment(commentId)
    }

    const deleteComment = (commentId: string) => {
        props.deleteComment(commentId)
    }

    return <OneCommentComponent oneComment={props.oneComment}
                                likeComment={likeComment}
                                deleteComment={deleteComment}/>
}