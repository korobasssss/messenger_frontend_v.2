import {connect} from "react-redux";
import {usersThunk} from "@/redux/thunks/usersThunk";
import {OneUser} from "@/app/components/blog_pages/friends/oneUser/OneUser";

const mapStateToProps = () => {
    return {}
}

const mapDispatchToProps = {
    action: usersThunk.ActionUser,
}

export const OneUserContainer = connect(mapStateToProps, mapDispatchToProps)(OneUser)