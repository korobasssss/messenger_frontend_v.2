import {PhotoComponent} from "@/app/components/blog_pages/profile/photo/PhotoComponent";
import {useEffect} from "react";
import {
    NameInterface,
    Photo_profileInterface,
    Photo_profileInterfaceComponent
} from "@/app/interfaces/photo/photoInterface";

export const Photo = (props: Photo_profileInterface & NameInterface) => {

    useEffect(() => {
        props.getPhoto()
    }, []);

    return <PhotoComponent photoUrl={props.photoUrl}
                           countPhoto={props.countPhoto}
                           name={props.name}/>
}