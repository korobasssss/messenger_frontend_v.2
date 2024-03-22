"use client"

import {connect} from "react-redux";
import {Main_AuthComponent} from "@/app/components/auth/Main_auth";
import {AuthThunk, clearMessages} from "@/redux/thunks/authThunk";
import {Main_authState} from "@/app/interfaces/auth/authInterface";
import {LoaderHOC} from "@/app/components/loader/LoaderHOC";

const mapStateToProps = (state: Main_authState) => {
    return {
        message: state.auth.message
    }
}
const mapDispatchToProps = {
    authorization: AuthThunk.Authorization,
    registration: AuthThunk.Registration,
    recovery: AuthThunk.RecoveryAccount,

    clearMessage: clearMessages
}

export const Main_authContainer =
    connect(mapStateToProps, mapDispatchToProps)(LoaderHOC(Main_AuthComponent))