import {connect} from "react-redux";
import {OnePhotoInterfaceState, UserDataForPostInterfaceState} from "@/app/interfaces/photo/photoInterface";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {
    PostData_forModalWindow
} from "@/app/components/blog_pages/profile/posts/one_post/post_in_photo_section/PostData_forModalWindow";

const mapStateToProps = (state:  OnePhotoInterfaceState & UserDataForPostInterfaceState) => {
    return {
        onePostOpened: state.post.onePostOpened,

        avatarUrl: state.profile.avatarUrl,
        name: state.profile.avatarUrl,
        nickname: state.auth.nickname
    }
}

const mapDispatchToProps = {
    getOnePost: postsThunk.GetOnePostData
}

export const PostData_forModalWindowContainer = connect(mapStateToProps, mapDispatchToProps)(PostData_forModalWindow)