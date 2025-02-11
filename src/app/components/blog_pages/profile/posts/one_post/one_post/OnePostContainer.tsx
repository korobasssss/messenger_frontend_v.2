import {connect} from "react-redux";
import {OnePostUserDataInterfaceState} from "@/app/interfaces/posts/postsInterfaceComponent";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {OnePost} from "@/app/components/blog_pages/profile/posts/one_post/one_post/OnePost";
import {photoThunk} from "@/redux/thunks/photoThunk";

const mapStateToProps = (state: OnePostUserDataInterfaceState) => {
    return {
        name: state.profile.name,
        avatarUrl: state.profile.avatarUrl,
        nickname: state.auth.nickname
    }
}

const mapDispatchToProps = {
    deletePost : postsThunk.DeletePost,
    likePost: postsThunk.LikePost,

    getPhoto: photoThunk.GetPhoto,
    getPhotoCount : photoThunk.GetPhotoCount,
}

export const OnePostContainer = connect(mapStateToProps, mapDispatchToProps)(OnePost)