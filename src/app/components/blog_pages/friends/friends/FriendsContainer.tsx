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
import {Friends} from "@/app/components/blog_pages/friends/friends/Friends";

const mapStateToProps = (state: UsersInterfaceState ) => {
    return {
        users: state.users.usersShortInfo,
        countFriends: state.users.countFriends,
        countSubscriptions: state.users.countSubscriptions,
        countSubscribers: state.users.countSubscribers
    }
}

const mapDispatchToProps = {
    getFriends: usersThunk.GetFriends,
    getSubscriptions: usersThunk.GetSubscriptions,
    getSubscribers: usersThunk.GetSubscribers,
    getSearch: usersThunk.GetSearch,
    getCountFriends: usersThunk.GetFriendsCount,
    getCountSubscriptions: usersThunk.GetSubscriptionsCount,
    getCountSubscribers: usersThunk.GetSubscribersCount
}

export const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)