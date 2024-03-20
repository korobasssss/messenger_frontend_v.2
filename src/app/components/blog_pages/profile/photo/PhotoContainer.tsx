import {connect} from "react-redux";
import {NameInterfaceState, Photo_profileInterfaceState} from "@/app/interfaces/photo/photoInterface";
import {photoThunk} from "@/redux/thunks/photoThunk";
import {Photo} from "@/app/components/blog_pages/profile/photo/Photo";

const mapStateToProps = (state: Photo_profileInterfaceState & NameInterfaceState ) => {
    return {
        photoUrl: state.photo.photoUrl,
        countPhoto: state.photo.countPhoto,
        name: state.profile.name
    }
}

const mapDispatchToProps = {
    getPhoto: photoThunk.GetPhoto
}

export const PhotoContainer = connect(mapStateToProps, mapDispatchToProps)(Photo)