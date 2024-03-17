import {connect} from "react-redux";
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";
import {PostsInterfaceState} from "@/app/interfaces/posts/postsInterface";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {NameInterfaceState, Photo_profileInterfaceState} from "@/app/interfaces/photo/photoInterface";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/photo/Photo_profileComponent";
import {PhotoComponent} from "@/app/components/blog_pages/profile/photo/PhotoComponent";

const mapStateToProps = (state: Photo_profileInterfaceState & NameInterfaceState ) => {
    return {
        photoUrl: state.photo.photoUrl,
        countPhoto: state.photo.countPhoto,
        name: state.profile.name
    }
}

const mapDispatchToProps = {
}

export const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(PhotoComponent)