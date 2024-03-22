import {connect} from "react-redux";
import {ProfileInterfaceState} from "@/app/interfaces/profile/profileInterface";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {profileThunk} from "@/redux/thunks/profileThunk";
import {Header_profile} from "@/app/components/blog_pages/profile/profile/header/Header_profile";
import {AuthThunk} from "@/redux/thunks/authThunk";

const mapStateToProps = (state: ProfileInterfaceState ) => {
    return {
        name: state.profile.name,
        bio: state.profile.bio,
        avatarUrl: state.profile.avatarUrl,
        coverUrl: state.profile.coverUrl,
        status: state.profile.status,

        nickname: state.auth.nickname
    }
}

const mapDispatchToProps = {
    action: usersThunk.ActionUser,
    getData: profileThunk.ProfileData,
    getNickname: AuthThunk.AuthGetData
}

export const Header_profileContainer = connect(mapStateToProps, mapDispatchToProps)(Header_profile)