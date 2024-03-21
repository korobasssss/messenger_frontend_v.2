import {connect} from "react-redux";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {CreatePost} from "@/app/components/blog_pages/profile/posts/create_post/CreatePost";
import {photoThunk} from "@/redux/thunks/photoThunk";

const mapStateToProps = () => {
    return {
    }
}

const mapDispatchToProps = {
    createPost: postsThunk.CreatePost,
    getPhoto: photoThunk.GetPhoto,
    getPhotoCount : photoThunk.GetPhotoCount
}

export const CreatePostContainer = connect(mapStateToProps, mapDispatchToProps)(CreatePost)