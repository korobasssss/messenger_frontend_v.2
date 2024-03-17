import {connect} from "react-redux";
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";
import {OnePostUserDataInterfaceState, PostsInterfaceState} from "@/app/interfaces/posts/postsInterface";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {NameInterfaceState, Photo_profileInterfaceState} from "@/app/interfaces/photo/photoInterface";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/photo/Photo_profileComponent";
import {PhotoComponent} from "@/app/components/blog_pages/profile/photo/PhotoComponent";
import {UsersInterfaceState} from "@/app/interfaces/friends/friendsInterface";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {FriendsComponent} from "@/app/components/blog_pages/friends/friends/FriendsComponent";
import {OneUser} from "@/app/components/blog_pages/friends/oneUser/OneUser";

const mapStateToProps = (state: OnePostUserDataInterfaceState) => {
    return {}
}

const mapDispatchToProps = {
    action: usersThunk.ActionUser
}

export const OneUserContainer = connect(mapStateToProps, mapDispatchToProps)(OneUser)