"use client"

import {connect} from "react-redux";
import {Main_AuthComponent} from "@/app/components/auth/Main_auth";
import {AuthThunk} from "@/redux/thunks/authThunk";
import {Main_authState} from "@/app/interfaces/auth/authInterface";

const mapStateToProps = (state: Main_authState) => {
    return {
        message: state.auth.message
    }
}
const mapDispatchToProps = {
    authorization: AuthThunk.Authorization,
    registration: AuthThunk.Registration,
    recovery: AuthThunk.RecoveryAccount,
}

export const Main_authContainer =
    connect(mapStateToProps, mapDispatchToProps)(Main_AuthComponent)