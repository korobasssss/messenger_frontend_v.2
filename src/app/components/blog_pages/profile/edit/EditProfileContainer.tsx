import {connect} from "react-redux";
import {profileThunk} from "@/redux/thunks/profileThunk";
import {ProfileInterfaceState} from "@/app/interfaces/profile/profileInterface";
import {AuthThunk} from "@/redux/thunks/authThunk";
import {EditProfile} from "@/app/components/blog_pages/profile/edit/EditProfile";
import {photoThunk} from "@/redux/thunks/photoThunk";

const mapStateToProps = (state: ProfileInterfaceState ) => {
    return {
        name: state.profile.name,
        bio: state.profile.bio,
        avatarUrl: state.profile.avatarUrl,
        coverUrl: state.profile.coverUrl,
        nickname: state.auth.nickname
    }
}

const mapDispatchToProps = {
    getData: profileThunk.ProfileData,
    getNickname: AuthThunk.AuthGetData,
    changeProfileData: profileThunk.ChangeProfileData,
    changeNickname: AuthThunk.ChangeNickname,

    deleteAvatar: photoThunk.DeleteAvatar,
    deleteCover: photoThunk.DeleteCover,
    setAvatar: photoThunk.SetAvatar,
    setCover: photoThunk.SetCover
}

export const EditProfileContainer = connect(mapStateToProps, mapDispatchToProps)(EditProfile)