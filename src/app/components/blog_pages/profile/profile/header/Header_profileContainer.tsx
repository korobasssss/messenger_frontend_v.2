import {connect} from "react-redux";
import {ProfileInterfaceState} from "@/app/interfaces/profile/profileInterface";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {Header_profileComponent} from "@/app/components/blog_pages/profile/profile/header/Header_profileComponent";

const mapStateToProps = (state: ProfileInterfaceState ) => {
    return {
        name: state.profile.name,
        bio: state.profile.bio,
        avatarUrl: state.profile.avatarUrl,
        coverUrl: state.profile.coverUrl,
        status: state.profile.status,
    }
}

const mapDispatchToProps = {
    action: usersThunk.ActionUser
}

export const Header_profileContainer = connect(mapStateToProps, mapDispatchToProps)(Header_profileComponent)