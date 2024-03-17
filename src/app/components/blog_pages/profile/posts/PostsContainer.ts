import {connect} from "react-redux";
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";
import {PostsInterfaceState} from "@/app/interfaces/posts/postsInterface";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";

const mapStateToProps = (state: PostsInterfaceState ) => {
    return {
        posts: state.posts.posts
    }
}

const mapDispatchToProps = {
}

export const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(PostsComponent)