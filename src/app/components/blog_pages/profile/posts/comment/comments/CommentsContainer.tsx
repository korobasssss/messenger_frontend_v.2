import {connect} from "react-redux";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {CommentsInterfaceState} from "@/app/interfaces/comments/commentsInterface";
import {Comments} from "@/app/components/blog_pages/profile/posts/comment/comments/Comment";

const mapStateToProps = (state: CommentsInterfaceState ) => {
    return {
        comments: state.posts.comments
    }
}

const mapDispatchToProps = {
    getComments: postsThunk.GetCommentsToPost,
    setComment: postsThunk.SetComment,

    getOnePost: postsThunk.GetOnePostData
}

export const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(Comments)