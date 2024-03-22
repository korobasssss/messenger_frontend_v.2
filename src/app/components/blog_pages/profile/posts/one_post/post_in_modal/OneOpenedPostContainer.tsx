import {connect} from "react-redux";
import {OnePhotoInterfaceState, UserDataForPostInterfaceState} from "@/app/interfaces/photo/photoInterface";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {OneOpenedPost} from "@/app/components/blog_pages/profile/posts/one_post/post_in_modal/OneOpenedPost";

const mapStateToProps = (state:  OnePhotoInterfaceState & UserDataForPostInterfaceState) => {
    return {
        onePostOpened: state.posts.onePostOpened,

        avatarUrl: state.profile.avatarUrl,
        name: state.profile.avatarUrl,
        nickname: state.auth.nickname
    }
}

const mapDispatchToProps = {
    getOnePost: postsThunk.GetOnePostData,
    getPosts: postsThunk.GetPosts,
    likePost: postsThunk.LikePost
}

export const OneOpenedPostContainer = connect(mapStateToProps, mapDispatchToProps)(OneOpenedPost)