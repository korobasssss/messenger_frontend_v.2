import {connect} from "react-redux";
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";
import {PostsInterfaceState} from "@/app/interfaces/posts/postsInterface";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {CommentsInterfaceState} from "@/app/interfaces/comments/commentsInterface";
import {CommentsComponent} from "@/app/components/blog_pages/profile/posts/comment/comments/CommentsComponent";

const mapStateToProps = (state: CommentsInterfaceState ) => {
    return {
        comments: state.posts.comments
    }
}

const mapDispatchToProps = {
    getComments: postsThunk.GetCommentsToPost
}

export const CommentsContainer = connect(mapStateToProps, mapDispatchToProps)(CommentsComponent)