import {connect} from "react-redux";
import {PostsInterfaceState} from "@/app/interfaces/posts/postsInterfaceComponent";
import {postsThunk} from "@/redux/thunks/postsThunk";
import {Posts} from "@/app/components/blog_pages/profile/posts/Posts";
import {photoThunk} from "@/redux/thunks/photoThunk";

const mapStateToProps = (state: PostsInterfaceState ) => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = {
    getPosts: postsThunk.GetPosts,
    getPhoto: photoThunk.GetPhoto,
    getCountPhoto: photoThunk.GetPhotoCount
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)