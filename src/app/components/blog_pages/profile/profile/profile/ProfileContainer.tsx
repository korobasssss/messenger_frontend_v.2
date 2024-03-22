import {connect} from "react-redux";
import {profileThunk} from "@/redux/thunks/profileThunk";
import {ProfileInterfaceState} from "@/app/interfaces/profile/profileInterface";
import {photoThunk} from "@/redux/thunks/photoThunk";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {ProfileComponent} from "@/app/components/blog_pages/profile/profile/profile/ProfileComponent";

const mapStateToProps = (state: ProfileInterfaceState ) => {
    return {
        name: state.profile.name,
        bio: state.profile.bio,
        avatarUrl: state.profile.avatarUrl,
        coverUrl: state.profile.coverUrl,
        status: state.profile.status,
        photoUrl: state.photo.photoUrl,
        countPhoto: state.photo.countPhoto,
        usersShortInfo: state.users.usersShortInfo,
        countFriends: state.users.countFriends
    }
}

const mapDispatchToProps = {
    getData: profileThunk.ProfileData,
    getPhoto: photoThunk.GetPhoto,
    getCountPhoto: photoThunk.GetPhotoCount,
    getRndFriend: usersThunk.GetRandomFriends,
    getCountFriends: usersThunk.GetFriendsCount
}

export const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(ProfileComponent)