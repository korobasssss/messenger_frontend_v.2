
"use client"

import {connect} from "react-redux";
import {AuthThunk} from "@/redux/thunks/authThunk";
import {Main_message} from "@/app/components/auth/account/Main_message";
import {Main_authState} from "@/app/interfaces/auth/authInterface";

const mapStateToProps = (state: Main_authState) => {
    return {
        message: state.auth.message
    }
}

const mapDispatchToProps = {
    activation_account: AuthThunk.AccountActivationMessage,
    change_email: AuthThunk.ConfirmChangingEmail
}

export const Main_messageContainer =
    connect(mapStateToProps, mapDispatchToProps)(Main_message)