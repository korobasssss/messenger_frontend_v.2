import {connect} from "react-redux";
import {AuthThunk} from "@/redux/thunks/authThunk";
import {SettingsState} from "@/app/interfaces/settings/settingsInterface";
import {DeleteAccount} from "@/app/components/blog_pages/settings/settings/delete/DeleteAccount";

const mapStateToProps = (state: SettingsState ) => {
    return {
        message: state.auth.message
    }
}

const mapDispatchToProps = {
    deleteAccount: AuthThunk.DeleteAccount
}

export const DeleteAccountContainer = connect(mapStateToProps, mapDispatchToProps)(DeleteAccount)