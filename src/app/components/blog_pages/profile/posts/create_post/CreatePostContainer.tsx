import {connect} from "react-redux";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {CreatePost} from "@/app/components/blog_pages/profile/posts/create_post/CreatePost";
import {photoThunk} from "@/redux/thunks/photoThunk";
import {CreatePostInterfaceState} from "@/app/interfaces/posts/createPostInterface";
import {clearMessage, setMessage} from "@/redux/reducers/authReducer";
import {setMessageThunk} from "@/redux/thunks/authThunk";

const mapStateToProps = (state : CreatePostInterfaceState) => {
    return {
        message: state.auth.message
    }
}

const mapDispatchToProps = {
    createPost: postsThunk.CreatePost,
    getPhoto: photoThunk.GetPhoto,
    getPhotoCount : photoThunk.GetPhotoCount,

    clearMessage: clearMessage,
    setMessageThunk: setMessageThunk
}

export const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)