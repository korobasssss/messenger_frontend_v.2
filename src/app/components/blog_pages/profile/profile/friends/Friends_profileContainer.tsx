import {connect} from "react-redux";
import {UsersInterfaceState} from "@/app/interfaces/friends/friendsInterface";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {Friends_profile} from "@/app/components/blog_pages/profile/profile/friends/Friends_profile";

const mapStateToProps = (state: UsersInterfaceState ) => {
    return {
        users: state.users.usersShortInfo,
        countFriends: state.users.countFriends,
    }
}

const mapDispatchToProps = {
    getRndFriends: usersThunk.GetRandomFriends
}

export const Friends_profileContainer = connect(mapStateToProps, mapDispatchToProps)(Friends_profile)