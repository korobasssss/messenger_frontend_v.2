import {connect} from "react-redux";
import {profileThunk} from "@/redux/thunks/profileThunk";
import {ProfileInterfaceState} from "@/app/interfaces/profile/profileInterface";
import {photoThunk} from "@/redux/thunks/photoThunk";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {ProfileComponent} from "@/app/components/blog_pages/profile/profile/profile/ProfileComponent";
import {AuthThunk} from "@/redux/thunks/authThunk";
import {Settings} from "@/app/components/blog_pages/settings/settings/Settings";
import {SettingsState} from "@/app/interfaces/settings/settingsInterface";

const mapStateToProps = (state: SettingsState ) => {
    return {
        message: state.auth.message
    }
}

const mapDispatchToProps = {
    changeEmail: AuthThunk.ChangeEmail,
    setOldPassword: AuthThunk.GetCodeForChangingPassword,
    changePassword: AuthThunk.ChangePassword,
    setMessage: AuthThunk.SendMessage
}

export const SettingsContainer = connect(mapStateToProps, mapDispatchToProps)(Settings)