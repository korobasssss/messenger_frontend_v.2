import {connect} from "react-redux";
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";
import {PostsInterfaceState} from "@/app/interfaces/posts/postsInterface";
import {PostsComponent} from "@/app/components/blog_pages/profile/posts/PostsComponent";
import {NameInterfaceState, Photo_profileInterfaceState} from "@/app/interfaces/photo/photoInterface";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/photo/Photo_profileComponent";
import {PhotoComponent} from "@/app/components/blog_pages/profile/photo/PhotoComponent";
import {UsersInterfaceState} from "@/app/interfaces/friends/friendsInterface";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {FriendsComponent} from "@/app/components/blog_pages/friends/friends/FriendsComponent";

const mapStateToProps = (state: UsersInterfaceState ) => {
    return {
        users: state.users.users
    }
}

const mapDispatchToProps = {
    getFriends: usersThunk.GetFriends,
    getSubscriptions: usersThunk.GetSubscriptions,
    getSubscribers: usersThunk.GetSubscribers,
    getSearch: usersThunk.GetSearch
}

export const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(FriendsComponent)