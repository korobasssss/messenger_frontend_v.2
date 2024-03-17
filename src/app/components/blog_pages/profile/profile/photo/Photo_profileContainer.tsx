import {connect} from "react-redux";
import {Photo_profileInterfaceState} from "@/app/interfaces/photo/photoInterface";
import {Photo_profileComponent} from "@/app/components/blog_pages/profile/profile/photo/Photo_profileComponent";

const mapStateToProps = (state: Photo_profileInterfaceState ) => {
    return {
        photoUrl: state.photo.photoUrl,
        countPhoto: state.photo.countPhoto,
    }
}

const mapDispatchToProps = {
}

export const Photo_profileContainer = connect(mapStateToProps, mapDispatchToProps)(Photo_profileComponent)