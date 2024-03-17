import {connect} from "react-redux";
import {OnePostUserDataInterfaceState} from "@/app/interfaces/posts/postsInterface";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {OnePost} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePost";

const mapStateToProps = (state: OnePostUserDataInterfaceState) => {
    return {
        name: state.profile.name,
        avatarUrl: state.profile.avatarUrl,
        nickname: state.auth.nickname
    }
}

const mapDispatchToProps = {
    deletePost : postsThunk.DeletePost,
    likePost: postsThunk.LikePost
}

export const OnePostContainer = connect(mapStateToProps, mapDispatchToProps)(OnePost)