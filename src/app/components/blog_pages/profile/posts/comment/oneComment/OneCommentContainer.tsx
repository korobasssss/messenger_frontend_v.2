import {connect} from "react-redux";
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";
import {PostsInterfaceState} from "@/app/interfaces/posts/postsInterfaceComponent";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {OneComment} from "@/app/components/blog_pages/profile/posts/comment/oneComment/OneComment";
import {profileThunk} from "@/redux/thunks/profileThunk";

const mapStateToProps = (state: PostsInterfaceState ) => {
    return {}
}

const mapDispatchToProps = {
    likeComment: postsThunk.LikeComment,
    deleteComment: postsThunk.DeleteComment,
    getOnePost: postsThunk.GetOnePostData
}

export const OneCommentContainer = connect(mapStateToProps, mapDispatchToProps)(OneComment)